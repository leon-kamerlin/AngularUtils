export enum DispatcherActionTypes {
    CREATE,
    UPDATE,
    DELETE,
    UPDATE_OR_CREATE,
    CLOSE_DIALOG
}

export interface DataDispatcher<T> {
    data: T;
    action: DispatcherActionTypes;
}
