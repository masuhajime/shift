import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import uuidv4 from 'uuid/v4'

interface IStaff {
  id: string;
  name: string;
}

interface IShiftPattern {
  id: string;
  name: string;
}

interface IStaffGroup {
  id: string;
  name: string;
}

interface IStaffStore {
  staffs: Array<IStaff>;
  shiftPatterns: Array<IShiftPattern>;
  groups: Array<IStaffGroup>;
}

@Module({ stateFactory: true, namespaced: true, name: 'staff' })
export default class Staff extends VuexModule implements IStaffStore {
  staffs: Array<IStaff> = [];
  shiftPatterns: Array<IShiftPattern> = [];
  groups: Array<IStaffGroup> = [];

  @Mutation
  addShiftPatterns (name: string) {
    this.shiftPatterns.push({ id: uuidv4(), name })
  }

  @Mutation
  addGroup (name: string) {
    this.groups.push({ id: uuidv4(), name })
  }

  @Mutation
  addStaff (name: string) {
    this.staffs.push({ id: uuidv4(), name })
  }

  @Mutation
  removeStaff (id: string) {
    this.staffs = this.staffs.filter((staff) => {
      return staff.id !== id
    })
  }
}
