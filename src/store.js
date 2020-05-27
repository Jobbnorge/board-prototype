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
    addCandidate(listName, candidate){
        this.state.candidates[listName].push(candidate);
    }
    removeCandidate(listName, candidate) {
        let index = this.state.candidates[listName].indexOf(candidate);
        this.state.candidates[listName].splice(index, 1);
    }
}

export const store = new Store();