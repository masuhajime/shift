import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Feed from '~/store/feed'
import Count from '~/store/count'
import Staff from '~/store/staff'

/* eslint import/no-mutable-exports: 0 */
let feedStore: Feed
let countStore: Count
let staffStore: Staff

function initialiseStores (store: Store<any>): void {
  feedStore = getModule(Feed, store)
  feedStore.loadPosts()
  countStore = getModule(Count, store)
  staffStore = getModule(Staff, store)
}

export { initialiseStores, feedStore, countStore, staffStore }
