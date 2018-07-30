import { Observable } from 'rxjs/Observable';
export declare enum AngularLoadingBarEventType {
    PROGRESS = 0,
    HEIGHT = 1,
    COLOR = 2,
    VISIBLE = 3,
    COMPLETE = 4,
}
export declare class AngularLoadingBarEvent {
    type: AngularLoadingBarEventType;
    value: any;
    constructor(type: AngularLoadingBarEventType, value: any);
}
export declare class AngularLoadingBarService {
    private _progress;
    private _height;
    private _color;
    private _visible;
    private _completed;
    private _intervalCounterId;
    private _eventSource;
    interval: number;
    internalCounterId: any;
    events: Observable<AngularLoadingBarEvent>;
    constructor();
    progress: number;
    height: string;
    color: string;
    visible: boolean;
    completed: boolean;
    private emitEvent(event);
    start(onCompleted?: Function): void;
    stop(): void;
    reset(): void;
    complete(): void;
    getRandom(min: number, max: number): number;
}
