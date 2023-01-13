let courses = [
  {
    title: 'SMM',

    howLong: 3,
  },

  {
    title: 'Dev',

    howLong: 6,
  },

  {
    title: 'Graph',

    howLong: 4,
  },
];

let earnings = {
  total: 0,

  max: 0,

  min: 0,
};

let m = 0;

let w = 0;

let average_age = 0;

let smm = 0;

let dev = 0;

let graph = 0;

let students = [
  {
    sex: 'm',

    age: 14,

    payment: 1220000,

    course: {
      title: 'SMM',
    },
  },

  {
    sex: 'm',

    age: 24,

    payment: 1883000,

    course: {
      title: 'Graph',
    },
  },

  {
    sex: 'w',

    age: 16,

    payment: 2190000,

    course: {
      title: 'Dev',
    },
  },

  {
    sex: 'm',

    age: 19,

    payment: 718000,

    course: {
      title: 'Graph',
    },
  },

  {
    sex: 'w',

    age: 15,

    payment: 2195000,

    course: {
      title: 'Dev',
    },
  },

  {
    sex: 'm',

    age: 24,

    payment: 460000,

    course: {
      title: 'SMM',
    },
  },

  {
    sex: 'w',

    age: 14,

    payment: 560000,

    course: {
      title: 'SMM',
    },
  },

  {
    sex: 'w',

    age: 22,

    payment: 160000,

    course: {
      title: 'Dev',
    },
  },

  {
    sex: 'm',

    age: 26,

    payment: 883000,

    course: { title: 'Graph' },
  },

  {
    sex: 'w',

    age: 26,

    payment: 750000,

    course: {
      title: 'Dev',
    },
  },

  {
    sex: 'm',

    age: 23,

    payment: 212000,

    course: {
      title: 'Graph',
    },
  },

  {
    sex: 'w',

    age: 24,

    payment: 883000,

    course: {
      title: 'Graph',
    },
  },

  {
    sex: 'w',

    age: 27,

    payment: 190000,

    course: {
      title: 'Dev',
    },
  },

  {
    sex: 'w',

    age: 19,

    payment: 210000,

    course: {
      title: 'Graph',
    },
  },

  {
    sex: 'w',

    age: 21,

    payment: 770000,

    course: {
      title: 'Dev',
    },
  },

  {
    sex: 'm',

    age: 18,

    payment: 1200000,

    course: {
      title: 'SMM',
    },
  },

  {
    sex: 'w',

    age: 51,

    payment: 880000,

    course: {
      title: 'SMM',
    },
  },

  {
    sex: 'm',

    age: 51,

    payment: 2430000,

    course: {
      title: 'Dev',
    },
  },

  {
    sex: 'w',

    age: 33,

    payment: 1277000,

    course: {
      title: 'Graph',
    },
  },

  {
    sex: 'w',

    age: 21,

    payment: 2750000,

    course: {
      title: 'Dev',
    },
  },
];

students.forEach(({course}) => {
    courses.forEach((el) => {
        if(el.title === course.title){
            course.howLong = el.howLong
        }
    })
});

console.log(students)

