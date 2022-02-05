interface IMoveElementInArrayProps<T> {
  array: T;
  from: number;
  to: number;
}

export default function IMoveElementInArray<T>({
  array,
  from,
  to,
}: IMoveElementInArrayProps<T>) {
  if (Array.isArray(array)) {
    if (to === from) return array;

    var target = array[from];
    var increment = to < from ? -1 : 1;

    for (var k = from; k != to; k += increment) {
      array[k] = array[k + increment];
    }
    array[to] = target;
  }
  return array;
}
