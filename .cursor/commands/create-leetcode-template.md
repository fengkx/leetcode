# Create LeetCode Template

创建 LeetCode 题目模板，包含函数签名和测试用例，但不包含解决方案。

## 输入参数

- **LeetCode URL**: 题目链接 (如 `https://leetcode.com/problems/maximum-subarray/`)
- **语言**: `typescript` | `rust` | `cpp`

## 通用流程

1. **获取题目信息**: 从 LeetCode URL 抓取题目描述、示例、约束条件
2. **解析函数签名**: 从题目中提取函数名、参数类型、返回类型
3. **生成测试用例**: 基于题目示例创建测试，可额外添加边界情况
4. **创建模板文件**: 按语言规范创建目录和文件

---

## TypeScript 模板

### 目录结构

```
problem-name/
└── problem-name.ts
```

- 使用 **kebab-case** 命名 (如 `maximum-subarray`)
- 单文件包含函数和测试

### 模板格式

```typescript
/**
 * {题号}. {题目名称}
 * {LeetCode URL}
 *
 * {题目描述}
 *
 * Constraints:
 * - {约束条件}
 */
function functionName(params: Type): ReturnType {
    // TODO: implement solution
    throw new Error("Not implemented");
}

if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;

    describe("functionName", () => {
        test("example 1: {描述}", () => {
            // 测试用例
            expect(functionName(input)).toBe(expected);
        });

        test("example 2: {描述}", () => {
            // 测试用例
        });

        // 额外边界测试...
    });
}
```

### 测试命令

```bash
# 运行所有测试
pnpm test:js

# 监听模式
pnpm watch:js

# 运行单个文件
npx vitest run problem-name/problem-name.ts
```

---

## Rust 模板

### 目录结构

```
rust/
└── problem-name/
    ├── Cargo.toml
    └── src/
        └── lib.rs
```

- 使用 **kebab-case** 命名
- 需要创建 `Cargo.toml` 和 `src/lib.rs`

### Cargo.toml 格式

```toml
[package]
name = "problem-name"
version = "0.1.0"
edition = "2021"

[dependencies]
```

### src/lib.rs 模板格式

```rust
/// {题号}. {题目名称}
/// {LeetCode URL}
///
/// {题目描述}
///
/// Constraints:
/// - {约束条件}
struct Solution;

impl Solution {
    pub fn function_name(params: Type) -> ReturnType {
        // TODO: implement solution
        todo!()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_example_1() {
        // example 1: {描述}
        assert_eq!(Solution::function_name(input), expected);
    }

    #[test]
    fn test_example_2() {
        // example 2: {描述}
        assert_eq!(Solution::function_name(input), expected);
    }

    // 额外边界测试...
}
```

### 测试命令

```bash
# 运行所有 Rust 测试
pnpm test:rust
# 或
cargo test --all

# 运行单个 crate
cd rust/problem-name && cargo test
```

---

## C++ 模板

### 目录结构

```
cpp/
└── problems/
    └── problem-name/
        ├── CMakeLists.txt
        └── problem-name.cpp
```

- 使用 **kebab-case** 命名
- 使用 Google Test 框架
- 包含公共头文件 `headers.h`

### 快速创建 (使用脚本)

```bash
cd cpp && ./new.sh problem-name
```

### CMakeLists.txt 格式

```cmake
project(problem-name)
cmake_minimum_required(VERSION 3.0.0)
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/../../cpp_include)
aux_source_directory(. PROBLEMS)

set(CMAKE_BUILD_TYPE "Debug")
set(CMAKE_CXX_FLAGS_DEBUG "$ENV{CXXFLAGS} -O0 -Wall -g -ggdb")
set(CMAKE_CXX_FLAGS_RELEASE "$ENV{CXXFLAGS} -O3 -Wall")
set(CXX_STANDARD 17)

foreach(PROBLEM ${PROBLEMS})
    get_filename_component(PROBLEM_NAME ${PROBLEM} NAME_WE)
    add_executable(${PROBLEM_NAME} ${PROBLEM})
    target_link_libraries(
        ${PROBLEM_NAME}
        gtest
        ${CMAKE_THREAD_LIBS_INIT}
    )
endforeach()
```

### problem-name.cpp 模板格式

```cpp
/**
 * {题号}. {题目名称}
 * {LeetCode URL}
 *
 * {题目描述}
 *
 * Constraints:
 * - {约束条件}
 */
#include "headers.h"

class Solution {
 public:
    ReturnType functionName(ParamType& param) {
        // TODO: implement solution
    }
};

TEST(problemName, example1) {
    Solution s;
    // example 1: {描述}
    auto input = vector<int>{...};
    EXPECT_EQ(s.functionName(input), expected);
}

TEST(problemName, example2) {
    Solution s;
    // example 2: {描述}
    EXPECT_EQ(s.functionName(input), expected);
}

int main(int argc, char** argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
```

### 测试命令

```bash
# 构建
cd cpp/problems/problem-name
mkdir -p build && cd build
cmake .. && make

# 运行
./problem-name
```

---

## 常用数据结构

### 链表节点

**TypeScript:**
```typescript
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}
```

**Rust:**
```rust
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}
```

**C++:** (已在 `cpp_include/listnode.h` 中定义)

### 二叉树节点

**TypeScript:**
```typescript
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}
```

**Rust:**
```rust
use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}
```

**C++:** (已在 `cpp_include/btreenode.h` 中定义)

---

## 注意事项

1. **只创建模板**: 函数体使用 `throw Error` / `todo!()` / 空实现，不写解决方案
2. **测试覆盖**: 包含所有 LeetCode 示例 + 边界情况 (空数组、单元素、负数等)
3. **命名规范**: 统一使用 kebab-case 目录名
4. **类型准确**: 参数和返回类型需与 LeetCode 一致
