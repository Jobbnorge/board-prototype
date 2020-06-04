import data from './data.json'

class Store {
    constructor() {
        this.state = {
            candidates: data,
            icons: {
                birthday: "calendar-alt",
                title: "briefcase",
                email: "envelope",
                phone: "phone"
            }
        };
    }
    setCandidates(_candidates) {
        this.state.candidates = _candidates;
    }
    addCandidate(listName, candidate, index) {
        this.state.candidates[listName].splice(index, 0, candidate);
        this.setNominationNumbers();
    }
    getCandidate(listName, candidateId) {
        return this.state.candidates[listName].find(c => c.id === candidateId);
    }
    removeCandidate(listName, candidate) {
        candidate.label = null;
        let index = this.state.candidates[listName].indexOf(candidate);
        this.state.candidates[listName].splice(index, 1);
        this.setNominationNumbers();
    }
    moveCandidate(listName, oldIndex, newIndex) {
        this.state.candidates[listName].splice(newIndex, 0, this.state.candidates[listName].splice(oldIndex, 1)[0]);
        this.setNominationNumbers();
    }
    setNominationNumbers() {
        this.state.candidates['nominated'].forEach((c, i) => c.label = `Nr.${i + 1}`)
    }
    getIcons() {
        return this.state.icons
    }
    isQualified(candidateId) {
        if (this.state.candidates.qualified.some(candidate => candidate.id === candidateId))
            return 1;
        else if (this.state.candidates.notQualified.some(candidate => candidate.id === candidateId))
            return 0;
        else
            return null;
    }
    getListName(candidateId) {
        var listName = null;
        var listKeys = Object.keys(this.state.candidates);
        var i = 0;

        while(!listName) {
            if (this.state.candidates[listKeys[i]].some(c => c.id === candidateId))
                listName = listKeys[i];
            i++;
        }

        console.info(listName);
        return listName;
    }
}

export const store = new Store();