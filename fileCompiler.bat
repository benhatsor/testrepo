@echo off
title File Compiler
cls

SETLOCAL ENABLEDELAYEDEXPANSION


if not exist *.c (
  echo Place this in a folder with C files to compile them.
  echo.
  pause
  exit
)

set compiledFiles=0

for %%f in (*.c) do (
  set fileName=%%~nf
  if not exist !fileName!.exe (
    echo Compiling !fileName!...
    gcc -o !fileName!.exe !fileName!.c
    set compiledFiles=1
  )
)

if "%compiledFiles%" == "1" (
  echo Done.
  echo.
  echo.
)

call :requestFile

:requestFile
echo Type a file to run, "/r [file]" to recompile, or "/e" to exit:
set /p "resp="

if "%resp%" == "/e" (
  exit
)

if "%resp:~-2%" == ".c" (
  set resp=%resp:~0,-2%
)

if "%resp:~0,2%" == "/r" (
  echo.
  echo Compiling %resp:~3%...
  gcc -o %resp:~3%.exe %resp:~3%.c
  echo Done.

  echo.
  echo.
  call :requestFile
)

echo.
%resp%.exe

echo.
echo.
call :requestFile
