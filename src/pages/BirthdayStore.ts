import { persist } from "mobx-persist";
import { observable, computed, action } from "mobx";

export interface Birthday {
    name: string,
    date: Date,
    id: number,
};

export class BirthdayStore {
    // saves the data in computer's local storage
    @persist('list')
    // MobX tracks changes made to the BirthdayStore using @observable
    @observable
    list: Birthday[] = [];

    // COMPUTED: lets you define properties that return a derived version from store
    @computed get hasNoHistory(): boolean {
        return this.list.length < 1;
    };
    // sorts the list array by date
    @computed get entries(): Birthday[] {
        const sortFunc = (firstItem: Birthday, secondItem: Birthday): number => {
            if (firstItem.id > secondItem.id)
                return 1;
            if (firstItem.id < secondItem.id)
                return -1;
            return 0;
        };
        return this.list.slice().sort(sortFunc);
    };

    // ACTION: operation on the stores data
    // saves a new birthday object
    @action
    save( name: string, date: Date) {
        this.list.push({ name, date, id: Date.now()});
    };
    // will remove a birthday object
    @action
    remove(birthdayId: number) {
        // finds the index number using the id
        const moodIndex = this.list.findIndex(({ id }) => birthdayId === id);
        this.list.splice(moodIndex, 1);
    };
};