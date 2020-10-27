cmake_minimum_required(VERSION 3.0.0)
project(leetcode VERSION 0.1.0)

#add_library(leetcode leetcode.cpp)

enable_testing()
find_package(Threads REQUIRED)
find_package(GTest REQUIRED)
include_directories(${GTEST_INCLUDE_DIR})


include_directories(${CMAKE_SOURCE_DIR}/cpp/cpp_include)
add_subdirectory(cpp)
