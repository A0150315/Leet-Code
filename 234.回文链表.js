var isPalindrome = function(head) {
  let arr = []
  let length = 0
  while (head) {
    arr.push(head.val)
    length++
    head = head.next
  }
  for (let i = 0; i < length / 2; i++) {
    if (arr[i] !== arr[length - 1 - i]) return false
  }
  return true
}
