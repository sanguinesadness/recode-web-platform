import { AngleDownIcon } from '@src/assets';
import { Popover } from '@src/components/Popover';
import { SearchBar } from '@src/components/SearchBar';
import { Tag } from '@src/components/Tag';
import { useTagsSelector } from '@src/hooks';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import {
  DEFAULT_TAGS_SELECT_PLACEHOLDER,
  EMPTY_TAGS_LIST_MESSAGE,
} from './constants.ts';
import * as Styled from './styled.ts';
import { ITagsSelectProps } from './types.ts';

export const TagsSelect: React.FC<ITagsSelectProps> = ({
  tags,
  required,
  values: initialTagsIds,
  label,
  placeholder,
  onChange,
  customTrigger,
}) => {
  const { current } = useTheme();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [selectedTagsIds, setSelectedTagsIds] =
    useState<string[]>(initialTagsIds);

  const selectedTags = useTagsSelector(tags, selectedTagsIds);

  const availableTags = useMemo(() => {
    return tags.filter((tag) => !selectedTagsIds.includes(tag.id));
  }, [selectedTagsIds, tags]);

  const handleToggleOpened = (e: React.MouseEvent<HTMLDivElement>) => {
    const elementAttrs = (e.target as HTMLDivElement).attributes;
    // if clicked on tag then return
    if (elementAttrs.getNamedItem('itemid')?.value === 'tag') {
      return;
    }
    setIsOpened((prev) => !prev);
  };

  const addToSelected = useCallback((tagId: string) => {
    setSelectedTagsIds((prev) => [...prev, tagId]);
  }, []);

  const removeFromSelected = useCallback((tagId: string) => {
    setSelectedTagsIds((prev) => prev.filter((id) => tagId !== id));
  }, []);

  const handleClose = () => setIsOpened(false);

  useEffect(() => {
    onChange?.(selectedTagsIds);
  }, [selectedTagsIds]);

  useEffect(() => {
    setSelectedTagsIds(initialTagsIds);
  }, [initialTagsIds.length]);

  return (
    <Popover
      isOpened={isOpened}
      onOutsideClick={handleClose}
      offsetTop={5}
      trigger={
        customTrigger ? (
          <div onClick={handleToggleOpened}>{customTrigger}</div>
        ) : (
          <Styled.FieldWrapperStyled
            label={label}
            required={required}
            onClick={handleToggleOpened}
          >
            {selectedTags.length > 0 ? (
              <Styled.TagsList>
                {selectedTags.map((tag) => (
                  <Tag
                    key={tag.id}
                    {...tag}
                    onClick={() => removeFromSelected(tag.id)}
                  />
                ))}
              </Styled.TagsList>
            ) : (
              <Styled.SelectPlaceholder>
                {placeholder ?? DEFAULT_TAGS_SELECT_PLACEHOLDER}
              </Styled.SelectPlaceholder>
            )}
            <Styled.SelectIconWrapper $rotated={isOpened}>
              <AngleDownIcon
                color={current.secondary.default}
                width={12}
                height={12}
              />
            </Styled.SelectIconWrapper>
          </Styled.FieldWrapperStyled>
        )
      }
    >
      <SearchBar placeholder="Search for tags..." />
      <Styled.TagsGrid>
        {availableTags.length > 0 ? (
          availableTags.map((tag) => (
            <Tag key={tag.id} onClick={() => addToSelected(tag.id)} {...tag} />
          ))
        ) : (
          <Styled.EmptyTagsListMessage>
            {EMPTY_TAGS_LIST_MESSAGE}
          </Styled.EmptyTagsListMessage>
        )}
      </Styled.TagsGrid>
    </Popover>
  );
};
