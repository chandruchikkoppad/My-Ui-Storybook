export interface StateDropdownProps{

    value:string;

    nodeObj:{};

    isReviewer:boolean;

    isApprovePage:boolean;

    handleDropdownOptionsClick:()=>void;

    disabled:boolean;

    isOnlyReviewer:boolean;

    userHasOnlyViewAccess:boolean;

    handleStateValueClick:()=>void;
}

