import { Observable } from '../../Observable';
import { exhaust } from '../../operator/exhaust';
Observable.prototype.exhaust = exhaust;
