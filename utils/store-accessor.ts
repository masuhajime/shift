import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Feed from '~/store/feed'
import Count from '~/store/count'

/* eslint import/no-mutable-exports: 0 */
let feedStore: Feed
let countStore: Count

function initialiseStores (store: Store<any>): void {
  feedStore = getModule(Feed, store)
  feedStore.loadPosts()
  countStore = getModule(Count, store)
}

export { initialiseStores, feedStore, countStore }
