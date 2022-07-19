import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs';
import {ask} from '@reach-sh/stdlib';

const stdlib = loadStdlib(process.env);

const roles = ["Deployer", "Participant"]

const role = await ask.ask("Which role are you playing: 1.Deployer or 2.Participant")

const initialAmount = stdlib.parseCurrency(20)

if(roles[role-1] === "Deployer") {
    const deployerAccount= await stdlib.newTestAccount(initialAmount);
    const ccount= await stdlib.newTestAccount(initialAmount);
    const deployerCtc = deployerAccount.contract(backend);
    const reachToken = await stdlib.launchToken(deployerAccount, "reachToken", "RTK");
    await reachToken.mint(deployerAccount, initialAmount)
    const amt = await stdlib.balanceOf(deployerAccount, reachToken.id);
    console.log(stdlib.formatCurrency(amt))
    const DeployerInteract = {
        reportInfo: async() => {
          console.log(`Contract info: ${JSON.stringify(await deployerCtc.getInfo())}`);
        },
        addressToWhiteList:ccount.networkAccount.addr,
        displayAddress: (add) => {
          console.log(`here is the whitelistedAddress: ${add}`)
        }
    };
    await deployerCtc.participants.Deployer(DeployerInteract)
} /*else {
    const accounts = await stdlib.newTestAccounts(10,initialAmount);
    const whiteList = async(who) => {
      try {
        const user = accounts[who]
        const info = await ask.ask('Paste contract info:', (s) => JSON.parse(s));
        const attacherCtc = user.contract(backend, info);
        const passed = await attacherCtc.apis.Participant.whiteList(user.networkAccount.addr);
        console.log(`spot-${Number(passed)} filled`)
      } catch(err) {
        console.log("Fsiled to add you bro")
      }
      
    }

    for(let i = 0; i<10;i++) {
      await whiteList(i)
    }*/

    


ask.done();
