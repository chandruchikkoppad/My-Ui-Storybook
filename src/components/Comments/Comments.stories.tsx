import type { Meta, StoryObj } from '@storybook/react';
import Comments from './Comments';
import '../../assets/styles/_colors.scss';
import './Comments.scss';
import { CommentType } from './type';
import React from 'react';

const meta: Meta<typeof Comments> = {
  title: 'Components/Comments',
  component: Comments,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Comments>;
export const basicCommentWithOutData: Story = {
  render: () => {
    const handleCommentsDataChange = (_inputValue: string) => {
    };

    const handleAddComment = (_newComment: CommentType, _parentNode: CommentType | null) => {
    };

    const handleEditComment = (_commentId: string, _updatedDescription: string, _updatedNode: CommentType | null) => {
    };

    const handleDelete = (_id: string | number) => {
    };

    return (
      <Comments
        onCommentsDataChange={handleCommentsDataChange}
        commentsData={[]}
        handleAddComment={handleAddComment}
        handleEditComment={handleEditComment}
        handleDeleteComment={handleDelete}
      />
    );
  },
};


export const basicCommentWithData: Story = {
  render: () => {
    const handleCommentsDataChange = (_inputValue: string) => {
    };
    const handleAddComment = (
      _newComment: CommentType,
      _parentNode: CommentType | null
    ) => {
    };

    const handleEditComment = (
      _commentId: string,
      _updatedDescription: string,
      _updatedNode: CommentType | null
    ) => {
    };
    const handleDelete = (_id: string | number) => {
    };
    return (
      <Comments
        isDisable
        onCommentsDataChange={handleCommentsDataChange}
        commentsData={[
          {
            createdBy: 'USR41096',
            modifiedBy: 'USR41096',
            createdByUname: 'Saqeb',
            modifiedByUname: 'Saqeb',
            createdOn: '22 Oct 2024 01:45 PM',
            modifiedOn: '03 Jan 2025 10:56 AM',
            id: '0128c910-b2fc-479d-a7b4-e0491cb69c16',
            name: 'Saqeb',
            emailId: [],
            description: 'tesdsfdt',
            commentParentId: '',
            comments: [
              {
                createdBy: 'USR41096',
                modifiedBy: 'USR41096',
                createdByUname: 'Saqeb',
                modifiedByUname: 'Saqeb',
                id: 'a47b95d2-1a2e-4e0c-a807-8eee842fa11b',
                name: 'Saqeb',
                emailId: [],
                description: 'tessttt',
                commentParentId: '0128c910-b2fc-479d-a7b4-e0491cb69c16',
                comments: [
                  {
                    createdBy: 'USR41096',
                    modifiedBy: 'USR41096',
                    createdByUname: 'Saqeb',
                    modifiedByUname: 'Saqeb',
                    createdOn: '06 Jan 2025 12:06 PM',
                    modifiedOn: '06 Jan 2025 12:06 PM',
                    id: 'e3cbd87e-3acc-403f-9ac7-ddfc150d2007',
                    name: 'Saqeb',
                    emailId: [],
                    description: 'qwerty',
                    commentParentId: 'a47b95d2-1a2e-4e0c-a807-8eee842fa11b',
                    comments: [],
                  },
                ],
              },
            ],
          },
          {
            createdBy: 'USR41096',
            modifiedBy: 'USR41096',
            createdByUname: 'Saqeb1',
            modifiedByUname: 'Saqeb',
            createdOn: '22 Oct 2024 01:45 PM',
            modifiedOn: '03 Jan 2025 10:56 AM',
            id: '0128c910-b2fc-479d-a7b4-e0491cb69c16',
            name: 'Saqeb1',
            emailId: [],
            description: 'tesdsData',
            commentParentId: '',
            comments: [
              {
                createdBy: 'USR41096',
                modifiedBy: 'USR41096',
                createdByUname: 'Saqeb',
                modifiedByUname: 'Saqeb',
                id: 'a47b95d2-1a2e-4e0c-a807-8eee842fa11b',
                name: 'Saqeb',
                emailId: [],
                description: 'Dhanyatha',
                commentParentId: '0128c910-b2fc-479d-a7b4-e0491cb69c16',
                comments: [
                  {
                    createdBy: 'USR41096',
                    modifiedBy: 'USR41096',
                    createdByUname: 'Saqeb',
                    modifiedByUname: 'Saqeb',
                    createdOn: '06 Jan 2025 12:06 PM',
                    modifiedOn: '06 Jan 2025 12:06 PM',
                    id: 'e3cbd87e-3acc-403f-9ac7-ddfc150d2007',
                    name: 'Saqeb',
                    emailId: [],
                    description: 'Sandesh',
                    commentParentId: 'a47b95d2-1a2e-4e0c-a807-8eee842fa11b',
                    comments: [],
                  },
                ],
              },
            ],
          },
        ]}
        handleEditComment={handleEditComment}
        handleAddComment={handleAddComment}
        handleDeleteComment={handleDelete}
      />
    );
  },
};

export default meta;
