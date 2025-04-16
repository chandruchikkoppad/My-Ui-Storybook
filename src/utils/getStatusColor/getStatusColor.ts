export const getStatusColor = (status: string) => {
    switch (status) {
        case 'PASS':
            return 'var(--status-button-text-passed)';
        case 'FAIL':
            return 'var(--status-button-text-failed)';
        case 'SKIP':
            return 'var(--status-button-text-skipped)';
        case 'WARNING':
            return 'var(--status-warning-text-color)';
        default:
            return 'var(--status-button-text-notExecuted)';
    }
};
export const getStatusLabel = (status: string): string => {
    switch (status) {
        case 'PASS':
            return 'Passed';
        case 'FAIL':
            return 'Failed';
        case 'SKIP':
            return 'Skipped';
        case 'WARNING':
            return 'Warning';
        default:
            return status;
    }
};

export const getStatus = (status: string): any => {
    switch (status) {
        case 'PASS':
            return 'passed';
        case 'FAIL':
            return 'failed';
        case 'SKIP':
            return 'skipped';
        case 'WARNING':
            return 'warning';
        case 'Running':
            return 'running';
        case 'Partially Executed':
            return 'partially-executed';
        case 'Aborted':
            return 'aborted';
        case 'Terminated':
            return 'terminated';
        default:
            return 'default';
    }
}