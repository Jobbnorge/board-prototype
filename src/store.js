class Store {
    constructor() {
        this.state = {
            candidates: {
                nominated: [],
                qualified: [],
                notQualified: [],
                interview: [],
                notAssessed: [],
                hired: []
            }
        };       
    }
    setCandidates(_candidates) {
        this.state.candidates = _candidates;
    }    
}

export const store = new Store();