project(word-break)
cmake_minimum_required(VERSION 3.0.0)
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/../../cpp_include)
aux_source_directory(. PROBLEMS)

set(CMAKE_BUILD_TYPE "Debug")
set(CMAKE_CXX_FLAGS_DEBUG "$ENV{CXXFLAGS} -O0 -Wall -g -ggdb")
set(CMAKE_CXX_FLAGS_RELEASE "$ENV{CXXFLAGS} -O3 -Wall")

foreach(PROBLEM ${PROBLEMS})
    get_filename_component(PROBLEM_NAME ${PROBLEM} NAME_WE)
    add_executable(${PROBLEM_NAME} ${PROBLEM})
    target_link_libraries(
        ${PROBLEM_NAME}
        gtest
        ${CMAKE_THREAD_LIBS_INIT}
    )
endforeach()
