class Validation {
    isNIPValid(nip) {
        if (nip == null) return false;
        if (nip.substring(0, 2) === "PL") {
            nip = nip.substring(2);
        }
        nip = nip.replace(/\-/g, '');// było \-
        if (nip.length !== 10) return false;
        for (let i = 0; i < 10; i++) {
            if (isNaN(nip[i])) return false;
        }
        let sum = 6 * nip[0] + 5 * nip[1] + 7 * nip[2] + 2 * nip[3] + 3 * nip[4] + 4 * nip[5] + 5 * nip[6] + 6 * nip[7] + 7 * nip[8];
        sum %= 11;
        if (parseInt(nip[9], 10) !== sum) return false;
        return true;
    }

    isREGONValid(reg) {
        if (reg == null) return false;
        if ( (reg.length !== 9) && (reg.length !== 14) ) return false;
        for (let i = 0; i < reg.length; i++) {
            if (isNaN(reg[i])) return false;
        }
        //wagi 8 9 2 3 4 5 6 7
        let sum = 8 * reg[0] + 9 * reg[1] + 2 * reg[2] + 3 * reg[3] + 4 * reg[4] + 5 * reg[5] + 6 * reg[6] + 7 * reg[7];
        sum %= 11;
        if (parseInt(reg[8], 10) !== sum) return false;
        
        if(reg.length === 14) {
            // wagi 2 4 8 5 0 9 7 3 6 1 2 4 8
            let sum2 = 2 * reg[0] + 4 * reg[1] + 8 * reg[2] + 5 * reg[3] + 0 * reg[4] + 9 * reg[5] + 7 * reg[6] + 3 * reg[7] + 6 * reg[8] +
                       1 * reg[9] + 2 * reg[10] + 4 * reg[11] +  8 * reg[12] ;
            sum2 %= 11;
            if (parseInt(reg[13], 10) !== sum2) return false;
        }
        return true;
    }

    isKRSValid(krs) {
        if (krs == null) return false;
        if(krs.length !== 13) return false;
        if(krs.substring(0,3) !== "KRS") return false;
        return true;
    }
}

export default Validation;