const data = [
  {
    id: 22,
    login_id: '111',
    login_name: '111',
    referral_path: '2',
    referral_id: 2,
    is_main: 1
  },
  {
    id: 23,
    login_id: '222',
    login_name: '222',
    referral_path: '2,22',
    referral_id: 22
  },
  {
    id: 24,
    login_id: '333',
    login_name: '333',
    referral_path: '2,22,23',
    referral_id: 23
  },
  {
    id: 25,
    login_id: '444',
    login_name: '444',
    referral_path: '2,22,23,24',
    referral_id: 24
  },
  {
    id: 26,
    login_id: '555',
    login_name: '555',
    referral_path: '22,23,24,25',
    referral_id: 25
  },
  {
    id: 27,
    login_id: '666',
    login_name: '666',
    referral_path: '2,22',
    referral_id: 22
  },
]

const obj = userData => {
  for (let entry of userData) {
    if (entry) {
      entry.children = []
    }
  }

  const temp = Object.values(userData)
  console.log(temp[1]);
  temp[0].children.push(temp[1])   
  // for (let i = 1; i < temp.length; i++) {
  //   const tempKey = temp[i]
  //  if (tempKey.referral_id[i] == tempKey.id[i-1]) {
  //   temp[i-1].children.push(temp[i].id)
  //  }
  // }
  return temp
}

console.log(obj(data))



// console.log(userFromDataRef(data))

  