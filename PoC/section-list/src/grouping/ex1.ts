const chats = [
  { date: '2022-06-22', message: 'hi1', name: 'jw' },
  { date: '2022-06-22', message: 'hi2', name: 'jw' },
  { date: '2022-06-22', message: 'hi3', name: 'jw' },
  { date: '2022-06-23', message: 'hi4', name: 'jw' },
  { date: '2022-06-23', message: 'hi5', name: 'jw' },
  { date: '2022-06-24', message: 'hi6', name: 'jw' },
  { date: '2022-06-24', message: 'hi7', name: 'jw' },
  { date: '2022-06-24', message: 'hi8', name: 'jw' },
];

export function groupArrayOfObjects(list: any, key: any) {
  return list.reduce((rv: any, x: any) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

var groupedChat = groupArrayOfObjects(chats, 'date');
console.log(groupedChat);

/**
 * 
 * Object {
  "2022-06-22": Array [
    Object {
      "date": "2022-06-22",
      "message": "hi1",
      "name": "jw",
    },
    Object {
      "date": "2022-06-22",
      "message": "hi2",
      "name": "jw",
    },
    Object {
      "date": "2022-06-22",
      "message": "hi3",
      "name": "jw",
    },
  ],
  "2022-06-23": Array [
    Object {
      "date": "2022-06-23",
      "message": "hi4",
      "name": "jw",
    },
    Object {
      "date": "2022-06-23",
      "message": "hi5",
      "name": "jw",
    },
  ],
  "2022-06-24": Array [
    Object {
      "date": "2022-06-24",
      "message": "hi6",
      "name": "jw",
    },
    Object {
      "date": "2022-06-24",
      "message": "hi7",
      "name": "jw",
    },
    Object {
      "date": "2022-06-24",
      "message": "hi8",
      "name": "jw",
    },
  ],
}
 */
