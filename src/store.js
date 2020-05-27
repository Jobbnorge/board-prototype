import data from './data.json'

class Store {
    constructor() {
        this.state = {
            candidates: data
        };
    }
    setCandidates(_candidates) {
        this.state.candidates = _candidates;
    }
}

export const store = new Store();