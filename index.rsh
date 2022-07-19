'reach 0.1';
'use strict'

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const A = Participant('Deployer', {
    reportInfo:Fun([], Null),
    addressToWhiteList: Address,
    displayAddress:Fun([Address], Null)
    //tokenToDistribute: Fun([], Tuple(Token, UInt))
  });
  /*const B = API('Participant', {
    whiteList:Fun([Address], UInt),
  });*/

  init();

  A.only(() => {
    const address = declassify(interact.addressToWhiteList)
  })
 
  A.publish(address)
  A.interact.reportInfo()
  const whiteListedAddresses = new Set()
  whiteListedAddresses.insert(address)
  A.interact.displayAddress(address)

  commit()
  /*A.pay([ [amount, token ]])

  const whiteListedAddresses = new Map(Object({
    whiteListed:Bool
  }))

  const [whiteListedAddressesLength, canWhiteList] =
  parallelReduce([0, true])
  .invariant(balance() == 0)
  .while(canWhiteList)
  .api(B.whiteList, 
    (_) => {
      check(isNone(whiteListedAddresses[this]), "You're already whitelisted");
      check(whiteListedAddressesLength < 5, "Whitelist spots are done");
    },
    (_) => 0,
    (who, k) => {
      check(isNone(whiteListedAddresses[this]), "You're not whitelisted")
      check(whiteListedAddressesLength < 5, "Whitelist spots are done")
      whiteListedAddresses[who] = {whiteListed:true};
      transfer([[amount/5,token]]).to(who)
      k(whiteListedAddressesLength+1);
      return [whiteListedAddressesLength+1, true];
    }
  )
  
  commit();*/
  exit();

})
