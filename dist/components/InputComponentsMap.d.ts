import React from "react";
export declare const addInputType: (type: string, component: React.FC<any>) => void;
export declare const getInputComponent: (type: string) => React.FC<any> | undefined;
export declare const listRegisteredInputTypes: () => string[];
