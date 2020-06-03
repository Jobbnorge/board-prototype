import data from './data.json'

class Store {
    constructor() {
        this.state = {
            candidates: data,
            icons: {
                birthday: "calendar-alt",
                title:  "briefcase",
                email: "envelope",
                phone:"phone"
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
    setNominationNumbers(){
        this.state.candidates['nominated'].forEach((c,i) => c.label = `Nr.${i+1}` )
    }
    getIcons() {
        return this.state.icons
    }
    isQualified(candidateId) {
        this.state.candidates["qualified"].forEach((element) => {
            if(element.id == candidateId) {
                return true; 
            }
          })
          return false; 
          
    }

}

export const store = new Store();