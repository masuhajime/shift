import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'


@Module({ stateFactory: true, namespaced: true, name: 'count' })
export default class Count extends VuexModule {
    count: number = 0;

    @Mutation
    add () {
      this.count = this.count + 1;
    }

}