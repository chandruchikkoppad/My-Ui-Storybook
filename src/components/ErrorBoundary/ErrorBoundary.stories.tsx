import { FC } from "react";
import type { Meta, StoryObj } from '@storybook/react';
import ErrorBoundary from './ErrorBoundary';

// A test component to simulate an error
const ErrorProneComponent: FC<{ shouldThrow: boolean }> = ({ shouldThrow }) => {
    if (shouldThrow) {
        throw new Error('An intentional error occurred!');
    }
    return <div>No errors here!</div>;
};

const meta: Meta<typeof ErrorBoundary> = {
    title: 'Components/ErrorBoundary',
    component: ErrorBoundary,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ErrorBoundary>;

export const WithError: Story = {
    render: () => (
        <ErrorBoundary fallback={<div>Something went wrong!</div>}>
            <ErrorProneComponent shouldThrow={true} />
        </ErrorBoundary>
    ),
};

export const WithoutError: Story = {
    render: () => (
        <ErrorBoundary fallback={<div>Something went wrong!</div>}>
            <ErrorProneComponent shouldThrow={false} />
        </ErrorBoundary>
    ),
};
