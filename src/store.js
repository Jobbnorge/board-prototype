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
    addCandidate(listName, candidate) {
        this.state.candidates[listName].push(candidate);
        if(listName === 'nominated') candidate.label = this.state.candidates[listName].indexOf(candidate);
    }
    removeCandidate(listName, candidate) {
        if(listName === 'nominated') candidate.label = null;
        let index = this.state.candidates[listName].indexOf(candidate);
        this.state.candidates[listName].splice(index, 1);
    }
    moveCandidate(listName, oldIndex, newIndex) {
        this.state.candidates[listName].splice(newIndex, 0, this.state.candidates[listName].splice(oldIndex, 1)[0]);
    }
}

export const store = new Store();