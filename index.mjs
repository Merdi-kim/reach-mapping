import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import {ask} from '@reach-sh/stdlib';

const stdlib = loadStdlib(process.env);

const roles = ["Deployer", "Participant"]

const role = await ask.ask("Which role are you playing: 1.Deployer or 2.Participant")

const initialAmount = stdlib.parseCurrency(20)

if(roles[role-1] === "Deployer") {
    const deployerAccount= await stdlib.newTestAccount(initialAmount);
    const deployerCtc = deployerAccount.contract(backend);
    const DeployerInteract = {
        reportInfo: async() => {
          console.log(`Contract info: ${JSON.stringify(await deployerCtc.getInfo())}`);
        },
    };
    await deployerCtc.participants.Deployer(DeployerInteract)
} else {
    const accounts = await stdlib.newTestAccounts(2,initialAmount);
    const whiteList = async(who) => {
      const user = accounts[who]
      const info = await ask.ask('Paste contract info:', (s) => JSON.parse(s));
      const attacherCtc = user.contract(backend, info);
      const passed = await attacherCtc.apis.Participant.whiteList(user.networkAccount.addr);
      console.log(Number(passed))
    }

    for(let i = 0; i<3;i++) {
      await whiteList(i)
    }

    
}

ask.done();
