import { State as AuthState } from './auth';
import { State as EventState } from './event';
import { State as FeedState } from './feed';
import { State as GroupState } from './group';
import { State as NavState } from './nav';
import { State as ProviderState } from './provider';
import { State as UserState } from './user';

export interface State {
    auth: AuthState;
    event: EventState;
    feed: FeedState;
    group: GroupState;
    nav: NavState;
    provider: ProviderState;
    user: UserState;
}
