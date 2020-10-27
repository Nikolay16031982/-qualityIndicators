
const getNormArr = (Nb, Nr) => {
    let temp = [{ reS: 0, imS: 0, reC: 0, imC: 0 }];
    for (let i = 0; i < Nb; ++i)
        for (let j = 0; j < Nr; ++j) {
            temp[i][j].reS = Math.random;
            temp[i][j].ImS = Math.random;
            temp[i][j].reS = Math.random;
            temp[i][j].ImS = Math.random;
        }
    return temp;
};
//*******************************************************************************************************************
//nsb, nsr, Ns, ampl, gamma

const getSignal = (par) => {
    let temp = [{ reS: 0, imS: 0, reC: 0, imC: 0 }];
    let t = 0;
    for (let i = 0; i < par.Nb; ++i)
        for (let j = 0; j < par.Nr; ++j) {
            t = i * par.Tp + j * par.Td;
            if (i == nsb && j == nsr) {
                temp[i][j].reS = par.ampl * Math.cos(par.gamma) * Math.cos(2 * Math.PI * par.Fd * t + par.fi0);
                temp[i][j].ImS = par.ampl * Math.cos(par.gamma) * Math.sin(2 * Math.PI * par.Fd * t + par.fi0);
                temp[i][j].reS = par.ampl * Math.sin(par.gamma) * Math.cos(2 * Math.PI * par.Fd * t + par.fi0);
                temp[i][j].ImS = par.ampl * Math.sin(par.gammaa) * Math.sin(2 * Math.PI * par.Fd * t + par.fi0);
            }
        }
    return temp;
};
//******************************************************************************************************************
const getPom = (par) => {
    = (par) => {
    let temp = [{ reS: 0, imS: 0, reC: 0, imC: 0 }];
    let t = 0;
    for (let i = 0; i < par.Nb; ++i)
        for (let j = 0; j < par.Nr; ++j) {
            t = i * par.Tp + j * par.Td;
            if (i == nsb && j == nsr) {
                temp[i][j].reS = par.ampl * Math.cos(par.gamma) * Math.cos(2 * Math.PI * par.Fd * t + par.fi0);
                temp[i][j].ImS = par.ampl * Math.cos(par.gamma) * Math.sin(2 * Math.PI * par.Fd * t + par.fi0);
                temp[i][j].reS = par.ampl * Math.sin(par.gamma) * Math.cos(2 * Math.PI * par.Fd * t + par.fi0);
                temp[i][j].ImS = par.ampl * Math.sin(par.gammaa) * Math.sin(2 * Math.PI * par.Fd * t + par.fi0);
            }
        }
    return temp;
};