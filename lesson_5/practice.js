function func() {
  let [ ...args ] = arguments;
  console.log(args);
}

func(1, 2, 3);