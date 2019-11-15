package valid_parentheses

func isValid(s string) bool {
	length := len(s)
	stack := make([]byte, length)
	top := -1
	for i := 0; i < length; i++ {
		if s[i] == '(' || s[i] == '[' || s[i] == '{' {
			top++
			stack[top] = s[i]
		} else {
			switch s[i] {
			case ')':
				if top < 0 || stack[top] != '(' {
					return false
				}
			case '}':
				if top < 0 || stack[top] != '{' {
					return false
				}
			case ']':
				if top < 0 || stack[top] != '[' {
					return false
				}
			}
			top--
		}
	}
	if top == -1 {
		return true
	} else {
		return false
	}
}
