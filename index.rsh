'reach 0.1';
'use strict'

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const A = Participant('Deployer', {
    reportInfo:Fun([], Null),
  });
  const B = API('Participant', {
    whiteList:Fun([Address], UInt),
    //reportInfo:Fun([], Null)
  });
  /*const C = API('Payment', {
    paying:Fun([Address], Null)
  })*/

  init();
  
  A.publish();
  A.interact.reportInfo()

  const whiteListedAddresses = new Map(Object({
    whiteListed:Bool
  }))

  const [whiteListedAddressesLength] =
  parallelReduce([0])
  .invariant(balance() == 0)
  .while(/*whiteListedAddressesLength < 5*/ true)
  .api(B.whiteList, 
    (who, k) => {
      //check(isNone(whiteListedAddresses[who]), "You're already whitelisted")
      check(whiteListedAddressesLength < 5, "Whitelist spots are done")
      whiteListedAddresses[who] = {whiteListed:true}
      k(whiteListedAddressesLength+1)
      return [whiteListedAddressesLength+1] 
    }
  )
  /*.api(C.paying, 
    (who,k) => {
      check(whiteListedAddress.member(who), "You are not whitelisted");
      transfer(4).to(who)
      whiteListedAddresses.remove(who)
    }
  )*/

  commit();
  exit();

});
