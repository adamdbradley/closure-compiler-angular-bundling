import { Observable } from '../../Observable';
import { takeUntil } from '../../operator/takeUntil';
Observable.prototype.takeUntil = takeUntil;
