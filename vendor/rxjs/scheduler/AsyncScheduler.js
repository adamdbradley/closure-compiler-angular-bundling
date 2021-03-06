import { Scheduler } from '../Scheduler';
export class AsyncScheduler extends Scheduler {
    constructor() {
        super(...arguments);
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    /**
     * @param {?} action
     * @return {?}
     */
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let /** @type {?} */ error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
function AsyncScheduler_tsickle_Closure_declarations() {
    /** @type {?} */
    AsyncScheduler.prototype.actions;
    /**
     * A flag to indicate whether the Scheduler is currently executing a batch of
     * queued actions.
     * @type {?}
     */
    AsyncScheduler.prototype.active;
    /**
     * An internal ID used to track the latest asynchronous task such as those
     * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
     * others.
     * @type {?}
     */
    AsyncScheduler.prototype.scheduled;
}
