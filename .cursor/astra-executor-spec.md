# 🌟 ASTRA EXECUTOR - MASTER SPECIFICATION

> **Version:** 1.0.0  
> **Codename:** Astra  
> **Language:** C++ 23  
> **Platform:** Windows 10/11 x64  
> **Architecture:** Multi-layered Modular Design

---

## 📋 TABLE OF CONTENTS

1. [Project Overview](#project-overview)
2. [Directory Structure](#directory-structure)
3. [Injector Module (9 Techniques)](#injector-module)
4. [Runtime Core (23 Techniques)](#runtime-core)
5. [Extra Features](#extra-features)
6. [Build System](#build-system)
7. [Security Architecture](#security-architecture)

---

## 🎯 PROJECT OVERVIEW

**Astra** is a next-generation Roblox executor featuring:
- **9 Advanced Injection Techniques** - Polymorphic, undetectable injection
- **23 Runtime Technologies** - Full Luau environment emulation
- **Modern Architecture** - Clean, maintainable, extensible codebase
- **Enterprise Security** - Multiple layers of protection

### Core Principles
- 🔒 **Security First** - Anti-detection at every layer
- ⚡ **Performance** - Zero-overhead abstractions
- 🧩 **Modularity** - Hot-swappable components
- 📦 **Portability** - Single-header dependencies where possible

---

## 📁 DIRECTORY STRUCTURE

```
Astra/
│
├── 📁 Injector/                              # Standalone Injector (EXE)
│   ├── 📁 src/
│   │   ├── 📁 core/
│   │   │   ├── 📁 process/
│   │   │   │   ├── 📁 handle/
│   │   │   │   │   ├── HandleManager.hpp
│   │   │   │   │   ├── HandleManager.cpp
│   │   │   │   │   └── HandleGuard.hpp
│   │   │   │   ├── 📁 memory/
│   │   │   │   │   ├── MemoryManager.hpp
│   │   │   │   │   ├── MemoryManager.cpp
│   │   │   │   │   ├── VirtualAlloc.hpp
│   │   │   │   │   └── SectionMapping.hpp
│   │   │   │   ├── 📁 thread/
│   │   │   │   │   ├── ThreadManager.hpp
│   │   │   │   │   ├── ThreadManager.cpp
│   │   │   │   │   ├── ThreadContext.hpp
│   │   │   │   │   └── ThreadPool.hpp
│   │   │   │   ├── ProcessManager.hpp
│   │   │   │   ├── ProcessManager.cpp
│   │   │   │   └── ProcessEnumerator.hpp
│   │   │   │
│   │   │   ├── 📁 pe/
│   │   │   │   ├── 📁 parser/
│   │   │   │   │   ├── PEParser.hpp
│   │   │   │   │   ├── PEParser.cpp
│   │   │   │   │   ├── DOSHeader.hpp
│   │   │   │   │   ├── NTHeaders.hpp
│   │   │   │   │   ├── SectionHeader.hpp
│   │   │   │   │   └── DataDirectories.hpp
│   │   │   │   ├── 📁 loader/
│   │   │   │   │   ├── PELoader.hpp
│   │   │   │   │   ├── PELoader.cpp
│   │   │   │   │   ├── ImportResolver.hpp
│   │   │   │   │   ├── ImportResolver.cpp
│   │   │   │   │   ├── RelocationFixer.hpp
│   │   │   │   │   ├── RelocationFixer.cpp
│   │   │   │   │   ├── TLSHandler.hpp
│   │   │   │   │   └── ExceptionHandler.hpp
│   │   │   │   └── 📁 mapper/
│   │   │   │       ├── ManualMapper.hpp
│   │   │   │       ├── ManualMapper.cpp
│   │   │   │       ├── SectionMapper.hpp
│   │   │   │       └── HeaderEraser.hpp
│   │   │   │
│   │   │   └── 📁 syscall/
│   │   │       ├── 📁 stubs/
│   │   │       │   ├── SyscallStub.asm
│   │   │       │   ├── SyscallStub.hpp
│   │   │       │   └── StubGenerator.hpp
│   │   │       ├── 📁 resolver/
│   │   │       │   ├── SSNResolver.hpp
│   │   │       │   ├── SSNResolver.cpp
│   │   │       │   ├── HalosGate.hpp
│   │   │       │   ├── HellsGate.hpp
│   │   │       │   └── TartarusGate.hpp
│   │   │       ├── 📁 wrapper/
│   │   │       │   ├── NtAllocateVirtualMemory.hpp
│   │   │       │   ├── NtWriteVirtualMemory.hpp
│   │   │       │   ├── NtCreateThreadEx.hpp
│   │   │       │   ├── NtProtectVirtualMemory.hpp
│   │   │       │   ├── NtOpenProcess.hpp
│   │   │       │   ├── NtQueryInformationProcess.hpp
│   │   │       │   └── NtQueueApcThread.hpp
│   │   │       ├── Syscall.hpp
│   │   │       └── Syscall.cpp
│   │   │
│   │   ├── 📁 techniques/
│   │   │   ├── 📁 base/
│   │   │   │   ├── IInjectionTechnique.hpp      # Interface
│   │   │   │   ├── TechniqueResult.hpp
│   │   │   │   ├── TechniqueConfig.hpp
│   │   │   │   └── TechniqueFactory.hpp
│   │   │   │
│   │   │   ├── 📁 t01_manual_mapping/
│   │   │   │   ├── ManualMapping.hpp
│   │   │   │   ├── ManualMapping.cpp
│   │   │   │   ├── 📁 stages/
│   │   │   │   │   ├── Stage1_Allocate.hpp
│   │   │   │   │   ├── Stage2_MapSections.hpp
│   │   │   │   │   ├── Stage3_Relocations.hpp
│   │   │   │   │   ├── Stage4_ImportTable.hpp
│   │   │   │   │   ├── Stage5_TLSCallbacks.hpp
│   │   │   │   │   ├── Stage6_EntryPoint.hpp
│   │   │   │   │   └── Stage7_Cleanup.hpp
│   │   │   │   └── README.md
│   │   │   │
│   │   │   ├── 📁 t02_direct_syscall/
│   │   │   │   ├── DirectSyscall.hpp
│   │   │   │   ├── DirectSyscall.cpp
│   │   │   │   ├── 📁 evasion/
│   │   │   │   │   ├── StackSpoofing.hpp
│   │   │   │   │   ├── IndirectSyscall.hpp
│   │   │   │   │   └── SyscallObfuscation.hpp
│   │   │   │   └── README.md
│   │   │   │
│   │   │   ├── 📁 t03_thread_hijacking/
│   │   │   │   ├── ThreadHijacking.hpp
│   │   │   │   ├── ThreadHijacking.cpp
│   │   │   │   ├── 📁 context/
│   │   │   │   │   ├── ContextSaver.hpp
│   │   │   │   │   ├── ContextModifier.hpp
│   │   │   │   │   └── ContextRestorer.hpp
│   │   │   │   └── README.md
│   │   │   │
│   │   │   ├── 📁 t04_apc_injection/
│   │   │   │   ├── APCInjection.hpp
│   │   │   │   ├── APCInjection.cpp
│   │   │   │   ├── 📁 variants/
│   │   │   │   │   ├── EarlyBirdAPC.hpp
│   │   │   │   │   ├── SpecialUserAPC.hpp
│   │   │   │   │   └── NtQueueApcThreadEx.hpp
│   │   │   │   └── README.md
│   │   │   │
│   │   │   ├── 📁 t05_ldr_load_dll/
│   │   │   │   ├── LdrLoadDll.hpp
│   │   │   │   ├── LdrLoadDll.cpp
│   │   │   │   ├── 📁 resolve/
│   │   │   │   │   ├── LdrResolver.hpp
│   │   │   │   │   └── UnicodeString.hpp
│   │   │   │   └── README.md
│   │   │   │
│   │   │   ├── 📁 t06_module_stomping/
│   │   │   │   ├── ModuleStomping.hpp
│   │   │   │   ├── ModuleStomping.cpp
│   │   │   │   ├── 📁 target/
│   │   │   │   │   ├── TargetSelector.hpp
│   │   │   │   │   ├── SignedModules.hpp
│   │   │   │   │   └── ModuleValidator.hpp
│   │   │   │   └── README.md
│   │   │   │
│   │   │   ├── 📁 t07_process_hollowing/
│   │   │   │   ├── ProcessHollowing.hpp
│   │   │   │   ├── ProcessHollowing.cpp
│   │   │   │   ├── 📁 hollow/
│   │   │   │   │   ├── ProcessCreator.hpp
│   │   │   │   │   ├── SectionUnmapper.hpp
│   │   │   │   │   └── ImageRemapper.hpp
│   │   │   │   └── README.md
│   │   │   │
│   │   │   ├── 📁 t08_reflective_loading/
│   │   │   │   ├── ReflectiveLoading.hpp
│   │   │   │   ├── ReflectiveLoading.cpp
│   │   │   │   ├── 📁 shellcode/
│   │   │   │   │   ├── ReflectiveLoader.asm
│   │   │   │   │   ├── ShellcodeGenerator.hpp
│   │   │   │   │   └── PositionIndependent.hpp
│   │   │   │   └── README.md
│   │   │   │
│   │   │   ├── 📁 t09_callback_injection/
│   │   │   │   ├── CallbackInjection.hpp
│   │   │   │   ├── CallbackInjection.cpp
│   │   │   │   ├── 📁 callbacks/
│   │   │   │   │   ├── TLSCallback.hpp
│   │   │   │   │   ├── KernelCallback.hpp
│   │   │   │   │   ├── InstrumentationCallback.hpp
│   │   │   │   │   └── VEHCallback.hpp
│   │   │   │   └── README.md
│   │   │   │
│   │   │   └── TechniqueManager.hpp
│   │   │
│   │   ├── 📁 antidebug/
│   │   │   ├── 📁 detection/
│   │   │   │   ├── 📁 api/
│   │   │   │   │   ├── IsDebuggerPresent.hpp
│   │   │   │   │   ├── CheckRemoteDebugger.hpp
│   │   │   │   │   ├── NtQueryInformationProcess.hpp
│   │   │   │   │   └── NtQuerySystemInformation.hpp
│   │   │   │   ├── 📁 timing/
│   │   │   │   │   ├── RDTSCCheck.hpp
│   │   │   │   │   ├── QueryPerformanceCounter.hpp
│   │   │   │   │   └── GetTickCount.hpp
│   │   │   │   ├── 📁 flags/
│   │   │   │   │   ├── PEBFlags.hpp
│   │   │   │   │   ├── HeapFlags.hpp
│   │   │   │   │   └── NtGlobalFlag.hpp
│   │   │   │   ├── 📁 hardware/
│   │   │   │   │   ├── HardwareBreakpoints.hpp
│   │   │   │   │   ├── DebugRegisters.hpp
│   │   │   │   │   └── INT3Scan.hpp
│   │   │   │   └── DebugDetector.hpp
│   │   │   │
│   │   │   ├── 📁 evasion/
│   │   │   │   ├── PEBMasking.hpp
│   │   │   │   ├── HandleCloaking.hpp
│   │   │   │   ├── ThreadHiding.hpp
│   │   │   │   └── MemoryHiding.hpp
│   │   │   │
│   │   │   └── AntiDebug.hpp
│   │   │
│   │   ├── 📁 antivm/
│   │   │   ├── 📁 detection/
│   │   │   │   ├── CPUIDCheck.hpp
│   │   │   │   ├── RegistryCheck.hpp
│   │   │   │   ├── ProcessCheck.hpp
│   │   │   │   ├── MACCheck.hpp
│   │   │   │   ├── DiskCheck.hpp
│   │   │   │   └── BIOSCheck.hpp
│   │   │   └── AntiVM.hpp
│   │   │
│   │   ├── 📁 crypto/
│   │   │   ├── 📁 symmetric/
│   │   │   │   ├── AES256.hpp
│   │   │   │   ├── AES256.cpp
│   │   │   │   ├── ChaCha20.hpp
│   │   │   │   └── XOR.hpp
│   │   │   ├── 📁 asymmetric/
│   │   │   │   ├── RSA.hpp
│   │   │   │   └── ECC.hpp
│   │   │   ├── 📁 hash/
│   │   │   │   ├── SHA256.hpp
│   │   │   │   ├── SHA512.hpp
│   │   │   │   ├── MD5.hpp
│   │   │   │   └── XXHash.hpp
│   │   │   └── Crypto.hpp
│   │   │
│   │   ├── 📁 communication/
│   │   │   ├── 📁 ipc/
│   │   │   │   ├── 📁 pipe/
│   │   │   │   │   ├── NamedPipeServer.hpp
│   │   │   │   │   ├── NamedPipeClient.hpp
│   │   │   │   │   └── PipeProtocol.hpp
│   │   │   │   ├── 📁 sharedmem/
│   │   │   │   │   ├── SharedMemory.hpp
│   │   │   │   │   ├── SharedMemory.cpp
│   │   │   │   │   └── MemoryProtocol.hpp
│   │   │   │   └── IPCManager.hpp
│   │   │   │
│   │   │   └── 📁 network/
│   │   │       ├── HTTPClient.hpp
│   │   │       ├── WebSocket.hpp
│   │   │       └── SecureChannel.hpp
│   │   │
│   │   ├── 📁 ui/
│   │   │   ├── 📁 imgui/
│   │   │   │   ├── ImGuiManager.hpp
│   │   │   │   ├── ImGuiManager.cpp
│   │   │   │   ├── 📁 widgets/
│   │   │   │   │   ├── StatusWidget.hpp
│   │   │   │   │   ├── ProcessList.hpp
│   │   │   │   │   ├── TechniqueSelector.hpp
│   │   │   │   │   └── LogViewer.hpp
│   │   │   │   └── 📁 theme/
│   │   │   │       ├── AstraTheme.hpp
│   │   │   │       └── Colors.hpp
│   │   │   └── UIManager.hpp
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── Logger.hpp
│   │   │   ├── Timer.hpp
│   │   │   ├── Random.hpp
│   │   │   ├── StringUtils.hpp
│   │   │   ├── FileUtils.hpp
│   │   │   └── ErrorHandler.hpp
│   │   │
│   │   └── main.cpp
│   │
│   ├── 📁 include/
│   │   └── Astra/
│   │       └── Injector.hpp                    # Public API
│   │
│   ├── 📁 resources/
│   │   ├── icon.ico
│   │   ├── manifest.xml
│   │   └── version.rc
│   │
│   ├── 📁 tests/
│   │   ├── 📁 unit/
│   │   │   ├── test_pe_parser.cpp
│   │   │   ├── test_syscall.cpp
│   │   │   └── test_techniques.cpp
│   │   └── 📁 integration/
│   │       └── test_injection.cpp
│   │
│   └── CMakeLists.txt
│
├── 📁 Core/                                    # Main DLL (Runtime)
│   ├── 📁 src/
│   │   ├── 📁 luau/
│   │   │   ├── 📁 lexer/
│   │   │   │   ├── 📁 token/
│   │   │   │   │   ├── Token.hpp
│   │   │   │   │   ├── TokenType.hpp
│   │   │   │   │   └── TokenStream.hpp
│   │   │   │   ├── 📁 scanner/
│   │   │   │   │   ├── Scanner.hpp
│   │   │   │   │   ├── Scanner.cpp
│   │   │   │   │   ├── CharacterReader.hpp
│   │   │   │   │   └── Keywords.hpp
│   │   │   │   ├── Lexer.hpp
│   │   │   │   └── Lexer.cpp
│   │   │   │
│   │   │   ├── 📁 parser/
│   │   │   │   ├── 📁 ast/
│   │   │   │   │   ├── 📁 nodes/
│   │   │   │   │   │   ├── ASTNode.hpp
│   │   │   │   │   │   ├── Expression.hpp
│   │   │   │   │   │   ├── Statement.hpp
│   │   │   │   │   │   ├── Block.hpp
│   │   │   │   │   │   ├── Function.hpp
│   │   │   │   │   │   ├── Variable.hpp
│   │   │   │   │   │   ├── Literal.hpp
│   │   │   │   │   │   ├── BinaryOp.hpp
│   │   │   │   │   │   ├── UnaryOp.hpp
│   │   │   │   │   │   ├── Call.hpp
│   │   │   │   │   │   ├── Index.hpp
│   │   │   │   │   │   ├── Table.hpp
│   │   │   │   │   │   ├── IfStatement.hpp
│   │   │   │   │   │   ├── WhileLoop.hpp
│   │   │   │   │   │   ├── ForLoop.hpp
│   │   │   │   │   │   ├── RepeatLoop.hpp
│   │   │   │   │   │   └── Return.hpp
│   │   │   │   │   ├── ASTVisitor.hpp
│   │   │   │   │   └── ASTPrinter.hpp
│   │   │   │   ├── Parser.hpp
│   │   │   │   └── Parser.cpp
│   │   │   │
│   │   │   ├── 📁 compiler/
│   │   │   │   ├── 📁 bytecode/
│   │   │   │   │   ├── 📁 opcodes/
│   │   │   │   │   │   ├── Opcode.hpp
│   │   │   │   │   │   ├── OpcodeTable.hpp
│   │   │   │   │   │   └── OpcodeEncoder.hpp
│   │   │   │   │   ├── 📁 chunk/
│   │   │   │   │   │   ├── Chunk.hpp
│   │   │   │   │   │   ├── Chunk.cpp
│   │   │   │   │   │   ├── Constant.hpp
│   │   │   │   │   │   ├── ConstantPool.hpp
│   │   │   │   │   │   └── Proto.hpp
│   │   │   │   │   ├── BytecodeBuilder.hpp
│   │   │   │   │   ├── BytecodeBuilder.cpp
│   │   │   │   │   └── BytecodeSerializer.hpp
│   │   │   │   ├── 📁 codegen/
│   │   │   │   │   ├── CodeGenerator.hpp
│   │   │   │   │   ├── CodeGenerator.cpp
│   │   │   │   │   ├── RegisterAllocator.hpp
│   │   │   │   │   ├── LocalResolver.hpp
│   │   │   │   │   └── UpvalueResolver.hpp
│   │   │   │   ├── 📁 optimization/
│   │   │   │   │   ├── Optimizer.hpp
│   │   │   │   │   ├── ConstantFolding.hpp
│   │   │   │   │   ├── DeadCodeElimination.hpp
│   │   │   │   │   └── PeepholeOptimizer.hpp
│   │   │   │   ├── Compiler.hpp
│   │   │   │   └── Compiler.cpp
│   │   │   │
│   │   │   ├── 📁 vm/
│   │   │   │   ├── 📁 state/
│   │   │   │   │   ├── LuaState.hpp
│   │   │   │   │   ├── LuaState.cpp
│   │   │   │   │   ├── CallInfo.hpp
│   │   │   │   │   ├── Stack.hpp
│   │   │   │   │   └── GlobalState.hpp
│   │   │   │   ├── 📁 value/
│   │   │   │   │   ├── TValue.hpp
│   │   │   │   │   ├── TValue.cpp
│   │   │   │   │   ├── String.hpp
│   │   │   │   │   ├── Table.hpp
│   │   │   │   │   ├── Table.cpp
│   │   │   │   │   ├── Closure.hpp
│   │   │   │   │   ├── Userdata.hpp
│   │   │   │   │   └── Thread.hpp
│   │   │   │   ├── 📁 execution/
│   │   │   │   │   ├── Executor.hpp
│   │   │   │   │   ├── Executor.cpp
│   │   │   │   │   ├── OpcodeHandlers.hpp
│   │   │   │   │   ├── OpcodeHandlers.cpp
│   │   │   │   │   └── InterruptHandler.hpp
│   │   │   │   ├── 📁 gc/
│   │   │   │   │   ├── GarbageCollector.hpp
│   │   │   │   │   ├── GarbageCollector.cpp
│   │   │   │   │   ├── GCObject.hpp
│   │   │   │   │   ├── MarkAndSweep.hpp
│   │   │   │   │   └── WeakTable.hpp
│   │   │   │   ├── VM.hpp
│   │   │   │   └── VM.cpp
│   │   │   │
│   │   │   ├── 📁 obfuscation/
│   │   │   │   ├── 📁 bytecode/
│   │   │   │   │   ├── BytecodeEncryptor.hpp
│   │   │   │   │   ├── BytecodeEncryptor.cpp
│   │   │   │   │   ├── OpcodeShuffler.hpp
│   │   │   │   │   └── ConstantEncryptor.hpp
│   │   │   │   ├── 📁 control_flow/
│   │   │   │   │   ├── ControlFlowObfuscator.hpp
│   │   │   │   │   ├── OpaquePredicate.hpp
│   │   │   │   │   └── JunkCodeInserter.hpp
│   │   │   │   └── Obfuscator.hpp
│   │   │   │
│   │   │   └── Luau.hpp                        # Unified Luau interface
│   │   │
│   │   ├── 📁 environment/
│   │   │   ├── 📁 spoofing/
│   │   │   │   ├── 📁 getfenv/
│   │   │   │   │   ├── GetfenvHandler.hpp
│   │   │   │   │   ├── GetfenvHandler.cpp
│   │   │   │   │   └── EnvironmentTable.hpp
│   │   │   │   ├── 📁 setfenv/
│   │   │   │   │   ├── SetfenvHandler.hpp
│   │   │   │   │   └── SetfenvHandler.cpp
│   │   │   │   ├── EnvironmentSpoofer.hpp
│   │   │   │   └── EnvironmentSpoofer.cpp
│   │   │   │
│   │   │   ├── 📁 identity/
│   │   │   │   ├── 📁 levels/
│   │   │   │   │   ├── IdentityLevel.hpp
│   │   │   │   │   ├── Level0_Plugin.hpp
│   │   │   │   │   ├── Level2_LocalScript.hpp
│   │   │   │   │   ├── Level3_Script.hpp
│   │   │   │   │   ├── Level4_Studio.hpp
│   │   │   │   │   ├── Level6_RobloxScript.hpp
│   │   │   │   │   └── Level8_CoreScript.hpp
│   │   │   │   ├── IdentitySpoofer.hpp
│   │   │   │   └── IdentitySpoofer.cpp
│   │   │   │
│   │   │   ├── 📁 capabilities/
│   │   │   │   ├── Capability.hpp
│   │   │   │   ├── CapabilityManager.hpp
│   │   │   │   ├── CapabilityManager.cpp
│   │   │   │   └── 📁 flags/
│   │   │   │       ├── Plugin.hpp
│   │   │   │       ├── LocalUser.hpp
│   │   │   │       ├── WritePlayer.hpp
│   │   │   │       ├── RobloxScript.hpp
│   │   │   │       └── RunClientScript.hpp
│   │   │   │
│   │   │   └── Environment.hpp
│   │   │
│   │   ├── 📁 closure/
│   │   │   ├── 📁 cclosure/
│   │   │   │   ├── CClosure.hpp
│   │   │   │   ├── CClosure.cpp
│   │   │   │   ├── CClosureWrapper.hpp
│   │   │   │   └── CClosureHandler.hpp
│   │   │   ├── 📁 lclosure/
│   │   │   │   ├── LClosure.hpp
│   │   │   │   ├── LClosure.cpp
│   │   │   │   └── LClosureWrapper.hpp
│   │   │   ├── 📁 newcclosure/
│   │   │   │   ├── NewCClosure.hpp
│   │   │   │   ├── NewCClosure.cpp
│   │   │   │   └── ClosureConverter.hpp
│   │   │   ├── ClosureManager.hpp
│   │   │   └── ClosureManager.cpp
│   │   │
│   │   ├── 📁 upvalue/
│   │   │   ├── 📁 operations/
│   │   │   │   ├── GetUpvalue.hpp
│   │   │   │   ├── SetUpvalue.hpp
│   │   │   │   ├── GetUpvalues.hpp
│   │   │   │   └── SetUpvalues.hpp
│   │   │   ├── UpvalueManager.hpp
│   │   │   └── UpvalueManager.cpp
│   │   │
│   │   ├── 📁 metatable/
│   │   │   ├── 📁 hooks/
│   │   │   │   ├── IndexHook.hpp
│   │   │   │   ├── NewIndexHook.hpp
│   │   │   │   ├── CallHook.hpp
│   │   │   │   ├── ToStringHook.hpp
│   │   │   │   └── NamecallHook.hpp
│   │   │   ├── 📁 readonly/
│   │   │   │   ├── ReadonlyBypass.hpp
│   │   │   │   └── MetatableUnlocker.hpp
│   │   │   ├── MetatableManager.hpp
│   │   │   └── MetatableManager.cpp
│   │   │
│   │   ├── 📁 instance/
│   │   │   ├── 📁 cache/
│   │   │   │   ├── 📁 mapping/
│   │   │   │   │   ├── PointerToUserdata.hpp
│   │   │   │   │   ├── UserdataToPointer.hpp
│   │   │   │   │   └── WeakRefCache.hpp
│   │   │   │   ├── InstanceCache.hpp
│   │   │   │   └── InstanceCache.cpp
│   │   │   │
│   │   │   ├── 📁 property/
│   │   │   │   ├── 📁 hooks/
│   │   │   │   │   ├── PropertyGetHook.hpp
│   │   │   │   │   ├── PropertySetHook.hpp
│   │   │   │   │   └── PropertyMonitor.hpp
│   │   │   │   ├── PropertyManager.hpp
│   │   │   │   └── PropertyManager.cpp
│   │   │   │
│   │   │   ├── 📁 method/
│   │   │   │   ├── MethodHook.hpp
│   │   │   │   ├── MethodWrapper.hpp
│   │   │   │   └── MethodManager.hpp
│   │   │   │
│   │   │   └── Instance.hpp
│   │   │
│   │   ├── 📁 signal/
│   │   │   ├── 📁 rbxscriptsignal/
│   │   │   │   ├── RBXScriptSignal.hpp
│   │   │   │   ├── RBXScriptSignal.cpp
│   │   │   │   ├── Connection.hpp
│   │   │   │   └── SignalFire.hpp
│   │   │   ├── 📁 emulation/
│   │   │   │   ├── Connect.hpp
│   │   │   │   ├── Once.hpp
│   │   │   │   ├── Wait.hpp
│   │   │   │   └── Disconnect.hpp
│   │   │   ├── SignalManager.hpp
│   │   │   └── SignalManager.cpp
│   │   │
│   │   ├── 📁 memory/
│   │   │   ├── 📁 scanner/
│   │   │   │   ├── 📁 pattern/
│   │   │   │   │   ├── Pattern.hpp
│   │   │   │   │   ├── PatternParser.hpp
│   │   │   │   │   └── PatternMatcher.hpp
│   │   │   │   ├── 📁 aob/
│   │   │   │   │   ├── AOBScanner.hpp
│   │   │   │   │   ├── AOBScanner.cpp
│   │   │   │   │   └── ScanResult.hpp
│   │   │   │   ├── MemoryScanner.hpp
│   │   │   │   └── MemoryScanner.cpp
│   │   │   │
│   │   │   ├── 📁 protection/
│   │   │   │   ├── MemoryProtect.hpp
│   │   │   │   ├── PageGuard.hpp
│   │   │   │   └── VirtualLock.hpp
│   │   │   │
│   │   │   └── Memory.hpp
│   │   │
│   │   ├── 📁 scheduler/
│   │   │   ├── 📁 runners/
│   │   │   │   ├── 📁 deferred/
│   │   │   │   │   ├── DeferredRunner.hpp
│   │   │   │   │   └── DeferredRunner.cpp
│   │   │   │   ├── 📁 heartbeat/
│   │   │   │   │   ├── HeartbeatRunner.hpp
│   │   │   │   │   └── HeartbeatRunner.cpp
│   │   │   │   ├── 📁 renderstepped/
│   │   │   │   │   ├── RenderSteppedRunner.hpp
│   │   │   │   │   └── RenderSteppedRunner.cpp
│   │   │   │   ├── 📁 stepped/
│   │   │   │   │   ├── SteppedRunner.hpp
│   │   │   │   │   └── SteppedRunner.cpp
│   │   │   │   └── IRunner.hpp
│   │   │   ├── 📁 task/
│   │   │   │   ├── TaskScheduler.hpp
│   │   │   │   ├── TaskScheduler.cpp
│   │   │   │   ├── Task.hpp
│   │   │   │   └── TaskQueue.hpp
│   │   │   ├── Scheduler.hpp
│   │   │   └── Scheduler.cpp
│   │   │
│   │   ├── 📁 coroutine/
│   │   │   ├── 📁 manager/
│   │   │   │   ├── CoroutineManager.hpp
│   │   │   │   ├── CoroutineManager.cpp
│   │   │   │   └── CoroutinePool.hpp
│   │   │   ├── 📁 yielding/
│   │   │   │   ├── YieldHandler.hpp
│   │   │   │   ├── YieldHandler.cpp
│   │   │   │   ├── ResumeHandler.hpp
│   │   │   │   └── WaitHandler.hpp
│   │   │   ├── 📁 task/
│   │   │   │   ├── TaskSpawn.hpp
│   │   │   │   ├── TaskDelay.hpp
│   │   │   │   ├── TaskDefer.hpp
│   │   │   │   ├── TaskWait.hpp
│   │   │   │   └── TaskCancel.hpp
│   │   │   └── Coroutine.hpp
│   │   │
│   │   ├── 📁 remotespy/
│   │   │   ├── 📁 hooks/
│   │   │   │   ├── 📁 remote_event/
│   │   │   │   │   ├── FireServerHook.hpp
│   │   │   │   │   ├── FireServerHook.cpp
│   │   │   │   │   └── OnClientEventHook.hpp
│   │   │   │   ├── 📁 remote_function/
│   │   │   │   │   ├── InvokeServerHook.hpp
│   │   │   │   │   ├── InvokeServerHook.cpp
│   │   │   │   │   └── OnClientInvokeHook.hpp
│   │   │   │   └── 📁 bindable/
│   │   │   │       ├── BindableEventHook.hpp
│   │   │   │       └── BindableFunctionHook.hpp
│   │   │   ├── 📁 logger/
│   │   │   │   ├── RemoteLogger.hpp
│   │   │   │   ├── RemoteLogger.cpp
│   │   │   │   ├── CallRecord.hpp
│   │   │   │   └── ArgumentSerializer.hpp
│   │   │   ├── 📁 ui/
│   │   │   │   ├── RemoteSpyUI.hpp
│   │   │   │   └── RemoteSpyUI.cpp
│   │   │   ├── RemoteSpy.hpp
│   │   │   └── RemoteSpy.cpp
│   │   │
│   │   ├── 📁 decompiler/
│   │   │   ├── 📁 bytecode/
│   │   │   │   ├── BytecodeReader.hpp
│   │   │   │   ├── BytecodeReader.cpp
│   │   │   │   ├── InstructionDecoder.hpp
│   │   │   │   └── ConstantDecoder.hpp
│   │   │   ├── 📁 analysis/
│   │   │   │   ├── ControlFlowAnalyzer.hpp
│   │   │   │   ├── DataFlowAnalyzer.hpp
│   │   │   │   ├── LoopReconstructor.hpp
│   │   │   │   └── ConditionalReconstructor.hpp
│   │   │   ├── 📁 emitter/
│   │   │   │   ├── LuauEmitter.hpp
│   │   │   │   ├── LuauEmitter.cpp
│   │   │   │   ├── ExpressionEmitter.hpp
│   │   │   │   └── StatementEmitter.hpp
│   │   │   ├── Decompiler.hpp
│   │   │   └── Decompiler.cpp
│   │   │
│   │   ├── 📁 hooking/
│   │   │   ├── 📁 detour/
│   │   │   │   ├── 📁 x64/
│   │   │   │   │   ├── Detour64.hpp
│   │   │   │   │   ├── Detour64.cpp
│   │   │   │   │   ├── TrampolineBuilder.hpp
│   │   │   │   │   └── RelocationHandler.hpp
│   │   │   │   ├── InlineHook.hpp
│   │   │   │   └── InlineHook.cpp
│   │   │   ├── 📁 vmt/
│   │   │   │   ├── VMTHook.hpp
│   │   │   │   ├── VMTHook.cpp
│   │   │   │   └── VMTScanner.hpp
│   │   │   ├── 📁 iat/
│   │   │   │   ├── IATHook.hpp
│   │   │   │   └── IATHook.cpp
│   │   │   ├── HookManager.hpp
│   │   │   └── HookManager.cpp
│   │   │
│   │   ├── 📁 functions/
│   │   │   ├── 📁 base/
│   │   │   │   ├── IFunction.hpp
│   │   │   │   ├── FunctionRegistry.hpp
│   │   │   │   └── FunctionRegistry.cpp
│   │   │   │
│   │   │   ├── 📁 console/
│   │   │   │   ├── rconsoleprint.hpp
│   │   │   │   ├── rconsoleclear.hpp
│   │   │   │   ├── rconsolename.hpp
│   │   │   │   ├── rconsoleinput.hpp
│   │   │   │   └── rconsolewarn.hpp
│   │   │   │
│   │   │   ├── 📁 filesystem/
│   │   │   │   ├── readfile.hpp
│   │   │   │   ├── writefile.hpp
│   │   │   │   ├── appendfile.hpp
│   │   │   │   ├── loadfile.hpp
│   │   │   │   ├── listfiles.hpp
│   │   │   │   ├── isfile.hpp
│   │   │   │   ├── isfolder.hpp
│   │   │   │   ├── makefolder.hpp
│   │   │   │   └── delfolder.hpp
│   │   │   │
│   │   │   ├── 📁 closure/
│   │   │   │   ├── newcclosure.hpp
│   │   │   │   ├── newlclosure.hpp
│   │   │   │   ├── iscclosure.hpp
│   │   │   │   ├── islclosure.hpp
│   │   │   │   ├── isexecutorclosure.hpp
│   │   │   │   ├── hookfunction.hpp
│   │   │   │   ├── hookmetamethod.hpp
│   │   │   │   ├── getrawmetatable.hpp
│   │   │   │   ├── setrawmetatable.hpp
│   │   │   │   └── setreadonly.hpp
│   │   │   │
│   │   │   ├── 📁 script/
│   │   │   │   ├── loadstring.hpp
│   │   │   │   ├── getgc.hpp
│   │   │   │   ├── getgenv.hpp
│   │   │   │   ├── getrenv.hpp
│   │   │   │   ├── getreg.hpp
│   │   │   │   ├── getinstances.hpp
│   │   │   │   ├── getnilinstances.hpp
│   │   │   │   ├── getscripts.hpp
│   │   │   │   ├── getrunningscripts.hpp
│   │   │   │   └── getloadedmodules.hpp
│   │   │   │
│   │   │   ├── 📁 crypt/
│   │   │   │   ├── crypt_base64_encode.hpp
│   │   │   │   ├── crypt_base64_decode.hpp
│   │   │   │   ├── crypt_encrypt.hpp
│   │   │   │   ├── crypt_decrypt.hpp
│   │   │   │   ├── crypt_hash.hpp
│   │   │   │   ├── crypt_generatekey.hpp
│   │   │   │   └── crypt_random.hpp
│   │   │   │
│   │   │   ├── 📁 drawing/
│   │   │   │   ├── Drawing.hpp
│   │   │   │   ├── 📁 objects/
│   │   │   │   │   ├── DrawingObject.hpp
│   │   │   │   │   ├── Line.hpp
│   │   │   │   │   ├── Circle.hpp
│   │   │   │   │   ├── Square.hpp
│   │   │   │   │   ├── Triangle.hpp
│   │   │   │   │   ├── Text.hpp
│   │   │   │   │   ├── Image.hpp
│   │   │   │   │   └── Quad.hpp
│   │   │   │   └── DrawingManager.hpp
│   │   │   │
│   │   │   ├── 📁 misc/
│   │   │   │   ├── setclipboard.hpp
│   │   │   │   ├── setfpscap.hpp
│   │   │   │   ├── identifyexecutor.hpp
│   │   │   │   ├── getexecutorname.hpp
│   │   │   │   ├── isrbxactive.hpp
│   │   │   │   ├── mouse1click.hpp
│   │   │   │   ├── mouse1press.hpp
│   │   │   │   ├── mouse1release.hpp
│   │   │   │   ├── mouse2click.hpp
│   │   │   │   ├── keypress.hpp
│   │   │   │   └── keyrelease.hpp
│   │   │   │
│   │   │   ├── 📁 debug/
│   │   │   │   ├── debug_getconstants.hpp
│   │   │   │   ├── debug_getconstant.hpp
│   │   │   │   ├── debug_setconstant.hpp
│   │   │   │   ├── debug_getupvalues.hpp
│   │   │   │   ├── debug_getupvalue.hpp
│   │   │   │   ├── debug_setupvalue.hpp
│   │   │   │   ├── debug_getprotos.hpp
│   │   │   │   ├── debug_getproto.hpp
│   │   │   │   ├── debug_getinfo.hpp
│   │   │   │   └── debug_getstack.hpp
│   │   │   │
│   │   │   ├── 📁 http/
│   │   │   │   ├── request.hpp
│   │   │   │   ├── http_request.hpp
│   │   │   │   └── syn_request.hpp
│   │   │   │
│   │   │   └── 📁 websocket/
│   │   │       ├── WebSocket.hpp
│   │   │       └── WebSocket.cpp
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── Logger.hpp
│   │   │   ├── Singleton.hpp
│   │   │   ├── Pattern.hpp
│   │   │   ├── Hash.hpp
│   │   │   └── StringEncrypt.hpp
│   │   │
│   │   └── dllmain.cpp
│   │
│   ├── 📁 include/
│   │   └── Astra/
│   │       └── Core.hpp
│   │
│   ├── 📁 resources/
│   │   └── version.rc
│   │
│   ├── 📁 tests/
│   │   ├── 📁 unit/
│   │   │   ├── test_lexer.cpp
│   │   │   ├── test_parser.cpp
│   │   │   ├── test_compiler.cpp
│   │   │   └── test_vm.cpp
│   │   └── 📁 integration/
│   │       └── test_execution.cpp
│   │
│   └── CMakeLists.txt
│
├── 📁 UI/                                      # User Interface
│   ├── 📁 src/
│   │   ├── 📁 renderer/
│   │   │   ├── 📁 dx11/
│   │   │   │   ├── DX11Renderer.hpp
│   │   │   │   ├── DX11Renderer.cpp
│   │   │   │   ├── SwapChain.hpp
│   │   │   │   └── RenderTarget.hpp
│   │   │   └── Renderer.hpp
│   │   │
│   │   ├── 📁 imgui/
│   │   │   ├── 📁 impl/
│   │   │   │   ├── imgui_impl_win32.hpp
│   │   │   │   ├── imgui_impl_win32.cpp
│   │   │   │   ├── imgui_impl_dx11.hpp
│   │   │   │   └── imgui_impl_dx11.cpp
│   │   │   ├── 📁 theme/
│   │   │   │   ├── AstraTheme.hpp
│   │   │   │   ├── AstraTheme.cpp
│   │   │   │   ├── Colors.hpp
│   │   │   │   └── Fonts.hpp
│   │   │   └── ImGuiManager.hpp
│   │   │
│   │   ├── 📁 windows/
│   │   │   ├── 📁 main/
│   │   │   │   ├── MainWindow.hpp
│   │   │   │   ├── MainWindow.cpp
│   │   │   │   └── 📁 tabs/
│   │   │   │       ├── ExecutorTab.hpp
│   │   │   │       ├── ScriptHubTab.hpp
│   │   │   │       ├── SettingsTab.hpp
│   │   │   │       └── ConsoleTab.hpp
│   │   │   ├── 📁 editor/
│   │   │   │   ├── ScriptEditor.hpp
│   │   │   │   ├── ScriptEditor.cpp
│   │   │   │   ├── 📁 syntax/
│   │   │   │   │   ├── LuauHighlighter.hpp
│   │   │   │   │   └── Keywords.hpp
│   │   │   │   └── 📁 autocomplete/
│   │   │   │       ├── Autocomplete.hpp
│   │   │   │       └── Suggestions.hpp
│   │   │   └── 📁 scripthub/
│   │   │       ├── ScriptHub.hpp
│   │   │       ├── ScriptHub.cpp
│   │   │       ├── ScriptCard.hpp
│   │   │       └── ScriptLoader.hpp
│   │   │
│   │   ├── 📁 widgets/
│   │   │   ├── Button.hpp
│   │   │   ├── TextInput.hpp
│   │   │   ├── Checkbox.hpp
│   │   │   ├── Dropdown.hpp
│   │   │   ├── Slider.hpp
│   │   │   ├── TabBar.hpp
│   │   │   └── Notification.hpp
│   │   │
│   │   └── main.cpp
│   │
│   └── CMakeLists.txt
│
├── 📁 Shared/                                  # Shared Libraries
│   ├── 📁 src/
│   │   ├── 📁 communication/
│   │   │   ├── 📁 protocol/
│   │   │   │   ├── Protocol.hpp
│   │   │   │   ├── MessageTypes.hpp
│   │   │   │   ├── Serializer.hpp
│   │   │   │   └── Deserializer.hpp
│   │   │   ├── IPCChannel.hpp
│   │   │   └── IPCChannel.cpp
│   │   │
│   │   ├── 📁 crypto/
│   │   │   ├── CryptoEngine.hpp
│   │   │   ├── CryptoEngine.cpp
│   │   │   └── KeyExchange.hpp
│   │   │
│   │   ├── 📁 hwid/
│   │   │   ├── 📁 collectors/
│   │   │   │   ├── CPUCollector.hpp
│   │   │   │   ├── DiskCollector.hpp
│   │   │   │   ├── MACCollector.hpp
│   │   │   │   ├── BIOSCollector.hpp
│   │   │   │   └── MBCollector.hpp
│   │   │   ├── HWIDGenerator.hpp
│   │   │   └── HWIDGenerator.cpp
│   │   │
│   │   ├── 📁 license/
│   │   │   ├── LicenseValidator.hpp
│   │   │   ├── LicenseValidator.cpp
│   │   │   └── KeyFormat.hpp
│   │   │
│   │   └── 📁 updater/
│   │       ├── 📁 delta/
│   │       │   ├── DeltaUpdater.hpp
│   │       │   ├── DeltaUpdater.cpp
│   │       │   └── PatchApplier.hpp
│   │       ├── UpdateChecker.hpp
│   │       └── UpdateChecker.cpp
│   │
│   └── CMakeLists.txt
│
├── 📁 Server/                                  # Backend API
│   ├── 📁 src/
│   │   ├── 📁 api/
│   │   │   ├── 📁 auth/
│   │   │   │   ├── AuthController.hpp
│   │   │   │   ├── AuthController.cpp
│   │   │   │   └── JWTHandler.hpp
│   │   │   ├── 📁 license/
│   │   │   │   ├── LicenseController.hpp
│   │   │   │   └── LicenseController.cpp
│   │   │   ├── 📁 scripts/
│   │   │   │   ├── ScriptController.hpp
│   │   │   │   └── ScriptController.cpp
│   │   │   └── 📁 updates/
│   │   │       ├── UpdateController.hpp
│   │   │       └── UpdateController.cpp
│   │   │
│   │   ├── 📁 database/
│   │   │   ├── Database.hpp
│   │   │   ├── Database.cpp
│   │   │   └── 📁 models/
│   │   │       ├── User.hpp
│   │   │       ├── License.hpp
│   │   │       └── Script.hpp
│   │   │
│   │   └── main.cpp
│   │
│   └── CMakeLists.txt
│
├── 📁 External/                                # Third-party Dependencies
│   ├── 📁 imgui/
│   ├── 📁 json/
│   ├── 📁 minhook/
│   ├── 📁 zlib/
│   ├── 📁 curl/
│   └── 📁 openssl/
│
├── 📁 Scripts/                                 # Build & Utility Scripts
│   ├── build.bat
│   ├── build.ps1
│   ├── clean.bat
│   └── package.bat
│
├── 📁 Docs/                                    # Documentation
│   ├── 📁 api/
│   │   └── UNC.md
│   ├── 📁 internal/
│   │   ├── Architecture.md
│   │   └── Injection.md
│   └── README.md
│
├── CMakeLists.txt                              # Root CMake
├── .clang-format
├── .gitignore
└── README.md
```

---

## 💉 INJECTOR MODULE (9 TECHNIQUES)

### T01: Manual Mapping
```cpp
namespace Astra::Injector::Techniques {
    class ManualMapping : public IInjectionTechnique {
    public:
        // Configuration
        struct Config {
            bool eraseHeaders = true;
            bool eraseSections = false;
            bool randomizeAllocation = true;
            bool useSyscalls = true;
        };
        
        // Stages
        Stage1_Allocate     → VirtualAllocEx with random base
        Stage2_MapSections  → Copy sections to target
        Stage3_Relocations  → Fix base relocations
        Stage4_ImportTable  → Resolve imports (manual GetProcAddress)
        Stage5_TLSCallbacks → Execute TLS callbacks
        Stage6_EntryPoint   → Call DllMain
        Stage7_Cleanup      → Erase PE headers
    };
}
```

### T02: Direct Syscalls
```cpp
namespace Astra::Injector::Syscall {
    // SSN Resolution Methods
    class HellsGate;      // Read SSN from ntdll
    class HalosGate;      // Neighbor search (hooked bypass)
    class TartarusGate;   // Exception-based resolution
    
    // Syscall Stub (x64 ASM)
    __declspec(naked) NTSTATUS SyscallStub() {
        __asm {
            mov r10, rcx
            mov eax, SSN
            syscall
            ret
        }
    }
    
    // Evasion
    class StackSpoofing;      // Fake call stack
    class IndirectSyscall;    // Jump to syscall;ret in ntdll
}
```

### T03: Thread Hijacking
```cpp
namespace Astra::Injector::Techniques {
    class ThreadHijacking : public IInjectionTechnique {
        // 1. Find alertable thread
        // 2. SuspendThread
        // 3. GetThreadContext
        // 4. Modify RIP to shellcode
        // 5. SetThreadContext
        // 6. ResumeThread
        // 7. Wait for completion
        // 8. Restore original context
    };
}
```

### T04: APC Injection
```cpp
namespace Astra::Injector::Techniques {
    class APCInjection : public IInjectionTechnique {
        // Variants
        struct Variants {
            EarlyBirdAPC,        // CreateProcess suspended + APC
            SpecialUserAPC,      // NtQueueApcThreadEx
            StandardAPC          // QueueUserAPC
        };
    };
}
```

### T05: LdrLoadDll
```cpp
namespace Astra::Injector::Techniques {
    class LdrLoadDll : public IInjectionTechnique {
        // Direct call to ntdll!LdrLoadDll
        // Bypasses LoadLibrary hooks
        // Uses UNICODE_STRING for path
    };
}
```

### T06: Module Stomping
```cpp
namespace Astra::Injector::Techniques {
    class ModuleStomping : public IInjectionTechnique {
        // 1. Load legitimate signed DLL
        // 2. Find RX section
        // 3. Change protection to RWX
        // 4. Overwrite with payload
        // 5. Execute
        
        // Target DLLs (signed by Microsoft)
        const char* targets[] = {
            "chakra.dll",
            "msvcp140.dll",
            "vcruntime140.dll"
        };
    };
}
```

### T07: Process Hollowing
```cpp
namespace Astra::Injector::Techniques {
    class ProcessHollowing : public IInjectionTechnique {
        // 1. CreateProcess suspended
        // 2. NtUnmapViewOfSection
        // 3. VirtualAllocEx at ImageBase
        // 4. WriteProcessMemory headers + sections
        // 5. Set entry point in context
        // 6. ResumeThread
    };
}
```

### T08: Reflective Loading
```cpp
namespace Astra::Injector::Techniques {
    class ReflectiveLoading : public IInjectionTechnique {
        // DLL contains its own loader
        // Position Independent Code
        // Self-mapping capability
        
        // Shellcode structure
        struct ReflectiveLoader {
            GetModuleHandleHash();
            GetProcAddressHash();
            LoadSelf();
            ResolveImports();
            CallEntryPoint();
        };
    };
}
```

### T09: Callback Injection
```cpp
namespace Astra::Injector::Techniques {
    class CallbackInjection : public IInjectionTechnique {
        // Methods
        TLSCallback,              // Add TLS callback entry
        KernelCallbackTable,      // Modify PEB callback table
        InstrumentationCallback,  // SetProcessInstrumentationCallback
        VEH                       // AddVectoredExceptionHandler
    };
}
```

---

## ⚡ RUNTIME CORE (23 TECHNIQUES)

### R01-R08: Luau Engine
```cpp
// R01: Custom Lexer
namespace Astra::Luau::Lexer {
    class Lexer {
        TokenStream tokenize(const std::string& source);
    };
}

// R02: Custom Parser
namespace Astra::Luau::Parser {
    class Parser {
        std::unique_ptr<AST::Node> parse(TokenStream& tokens);
    };
}

// R03: Custom Bytecode Compiler
namespace Astra::Luau::Compiler {
    class Compiler {
        Bytecode compile(AST::Node* root);
        // Roblox-compatible bytecode format
    };
}

// R04: Bytecode Encryption
namespace Astra::Luau::Obfuscation {
    class BytecodeEncryptor {
        void encrypt(Bytecode& bc);
        void decrypt(Bytecode& bc);
        // Runtime decryption before execution
    };
}

// R05: VM Virtualization
namespace Astra::Luau::VM {
    class VirtualMachine {
        void execute(const Bytecode& bc);
        // Custom opcode handlers
        // Anti-dump protection
    };
}

// R06: Constant Encryption
namespace Astra::Luau::Obfuscation {
    class ConstantEncryptor {
        void encryptStrings(Bytecode& bc);
        void encryptNumbers(Bytecode& bc);
    };
}

// R07: Control Flow Obfuscation
namespace Astra::Luau::Obfuscation {
    class ControlFlowObfuscator {
        void addOpaquePredicates(AST::Node* root);
        void flattenControlFlow(AST::Node* root);
    };
}

// R08: Anti-Decompilation
namespace Astra::Luau::Obfuscation {
    class AntiDecompiler {
        void watermark(Bytecode& bc);
        void addJunkOpcodes(Bytecode& bc);
    };
}
```

### R09-R14: Environment & Identity
```cpp
// R09: Environment Spoofing
namespace Astra::Environment {
    class EnvironmentSpoofer {
        Table* getfenv(int level);
        void setfenv(int level, Table* env);
    };
}

// R10: Identity Spoofing
namespace Astra::Environment {
    class IdentitySpoofer {
        void setIdentity(int level); // 0-8
        int getIdentity();
        // Level 8 = CoreScript permissions
    };
}

// R11: Capabilities System
namespace Astra::Environment {
    class CapabilityManager {
        void addCapability(Capability cap);
        void removeCapability(Capability cap);
        bool hasCapability(Capability cap);
    };
}

// R12: Closure Wrapping
namespace Astra::Closure {
    class ClosureWrapper {
        CClosure* wrapLClosure(LClosure* lc);
        LClosure* wrapCClosure(CClosure* cc);
        CClosure* newcclosure(lua_CFunction fn);
    };
}

// R13: Upvalue Manipulation
namespace Astra::Upvalue {
    class UpvalueManager {
        TValue getupvalue(Closure* cl, int idx);
        void setupvalue(Closure* cl, int idx, TValue val);
        std::vector<TValue> getupvalues(Closure* cl);
    };
}

// R14: Metatable Hooking
namespace Astra::Metatable {
    class MetatableManager {
        void hookIndex(Table* mt, lua_CFunction hook);
        void hookNewIndex(Table* mt, lua_CFunction hook);
        void hookNamecall(Table* mt, lua_CFunction hook);
        void setReadonly(Table* t, bool readonly);
    };
}
```

### R15-R19: Instance & Memory
```cpp
// R15: Instance Caching
namespace Astra::Instance {
    class InstanceCache {
        // Pointer <-> Userdata mapping
        std::unordered_map<void*, TValue> cache;
        TValue getOrCreate(void* ptr);
    };
}

// R16: Property Hooking
namespace Astra::Instance {
    class PropertyManager {
        void hookGet(const std::string& prop, PropertyHook hook);
        void hookSet(const std::string& prop, PropertyHook hook);
    };
}

// R17: Signal System
namespace Astra::Signal {
    class SignalManager {
        RBXScriptConnection connect(Signal* sig, Closure* callback);
        void fire(Signal* sig, std::vector<TValue> args);
        TValue wait(Signal* sig);
    };
}

// R18: Garbage Collection Hooks
namespace Astra::GC {
    class GCManager {
        void addGCCallback(GCCallback cb);
        void collectGarbage();
        std::vector<TValue> getGC(bool includeTables);
    };
}

// R19: Memory Scanner
namespace Astra::Memory {
    class Scanner {
        std::vector<uintptr_t> aobScan(const Pattern& pattern);
        uintptr_t findPattern(const char* module, const char* pattern);
    };
}
```

### R20-R23: Advanced Features
```cpp
// R20: Script Scheduler
namespace Astra::Scheduler {
    class Scheduler {
        void defer(Closure* fn);
        void spawn(Closure* fn);
        void delay(float seconds, Closure* fn);
        void bindToHeartbeat(Closure* fn);
        void bindToRenderStepped(Closure* fn);
    };
}

// R21: Coroutine Manager
namespace Astra::Coroutine {
    class Manager {
        Thread* create(Closure* fn);
        std::tuple<bool, std::vector<TValue>> resume(Thread* th);
        std::vector<TValue> yield(std::vector<TValue> args);
        void cancel(Thread* th);
    };
}

// R22: Remote Spy
namespace Astra::RemoteSpy {
    class RemoteSpy {
        void hookFireServer();
        void hookInvokeServer();
        void logCall(RemoteCall call);
        std::string generateScript(RemoteCall call);
    };
}

// R23: Decompiler Integration
namespace Astra::Decompiler {
    class Decompiler {
        std::string decompile(LClosure* cl);
        std::string decompile(Proto* proto);
        AST::Node* bytecodeToAST(const Bytecode& bc);
    };
}
```

---

## 🔥 EXTRA FEATURES

### Polymorphic Injector
```cpp
namespace Astra::Polymorphic {
    class Engine {
        // Each build generates unique binary
        void mutateCode();
        void shuffleInstructions();
        void encryptStrings();
        void changeSignature();
        
        // Hash changes every build
        std::string getBuildHash();
    };
}
```

### Heartbeat System
```cpp
namespace Astra::Heartbeat {
    class HeartbeatClient {
        void connect(const std::string& server);
        void sendHeartbeat();
        void processCommands();
        
        // Encrypted communication
        // Server can push updates
        // License validation
    };
}
```

### HWID System
```cpp
namespace Astra::HWID {
    class Generator {
        std::string generate();
        
        // Collectors
        std::string getCPUID();
        std::string getDiskSerial();
        std::string getMACAddress();
        std::string getBIOSSerial();
        std::string getMBSerial();
        
        // Anti-spoof
        bool validateHWID(const std::string& hwid);
    };
}
```

### Auto-Update System
```cpp
namespace Astra::Update {
    class Updater {
        bool checkForUpdates();
        void downloadUpdate();
        void applyDelta();
        
        // Delta updates
        // Silent installation
        // Rollback support
    };
}
```

### Crash Reporter
```cpp
namespace Astra::Crash {
    class Reporter {
        void installHandler();
        void generateMinidump(EXCEPTION_POINTERS* ep);
        void uploadReport(const Minidump& dump);
        
        // Stack trace
        // Module information
        // System info
    };
}
```

### Script Encryption
```cpp
namespace Astra::ScriptProtection {
    class Protector {
        std::string encrypt(const std::string& script);
        std::string decrypt(const std::string& encrypted);
        
        // AES-256-GCM
        // Per-user keys
        // Time-limited scripts
    };
}
```

---

## 🔨 BUILD SYSTEM

### CMake Configuration
```cmake
cmake_minimum_required(VERSION 3.20)
project(Astra VERSION 1.0.0 LANGUAGES CXX ASM_MASM)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Compiler flags
if(MSVC)
    add_compile_options(
        /W4           # Warning level 4
        /WX           # Warnings as errors
        /permissive-  # Strict conformance
        /Ob2          # Inline expansion
        /Oi           # Intrinsic functions
        /GL           # Whole program optimization
        /GS-          # No buffer security check
        /Gy           # Function-level linking
    )
    
    add_link_options(
        /LTCG         # Link-time code generation
        /OPT:REF      # Remove unreferenced
        /OPT:ICF      # Identical COMDAT folding
    )
endif()

# Anti-debug in release
if(CMAKE_BUILD_TYPE STREQUAL "Release")
    add_definitions(-DNDEBUG -DANTI_DEBUG)
endif()

# Subprojects
add_subdirectory(Injector)
add_subdirectory(Core)
add_subdirectory(UI)
add_subdirectory(Shared)
add_subdirectory(External)
```

### Build Commands
```batch
:: Debug build
cmake -B build -G "Visual Studio 17 2022" -A x64
cmake --build build --config Debug

:: Release build (optimized + anti-debug)
cmake -B build -G "Visual Studio 17 2022" -A x64 -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release
```

---

## 🔒 SECURITY ARCHITECTURE

### Multi-Layer Protection
```
Layer 1: Polymorphic Engine
    └── Unique signatures per build
    
Layer 2: Anti-Debug
    └── Multiple detection methods
    └── PEB masking
    └── Timing checks
    
Layer 3: Anti-VM
    └── VM detection
    └── Sandbox detection
    
Layer 4: Code Encryption
    └── String encryption
    └── Control flow obfuscation
    
Layer 5: Communication
    └── TLS 1.3
    └── Certificate pinning
    └── Message encryption
    
Layer 6: HWID Binding
    └── License validation
    └── Hardware fingerprint
```

---

## 📊 FUNCTION COMPATIBILITY (UNC Standard)

| Category | Functions | Status |
|----------|-----------|--------|
| **Console** | rconsoleprint, rconsoleinfo, rconsolewarn, rconsoleerr, rconsoleclear, rconsolename, rconsoleinput | ✅ |
| **Filesystem** | readfile, writefile, appendfile, loadfile, listfiles, isfile, isfolder, makefolder, delfolder | ✅ |
| **Closure** | newcclosure, newlclosure, iscclosure, islclosure, isexecutorclosure, checkclosure, clonefunction | ✅ |
| **Hooking** | hookfunction, hookmetamethod, restorefunction, getrawmetatable, setrawmetatable, setreadonly, isreadonly | ✅ |
| **Script** | loadstring, getgc, getgenv, getrenv, getreg, getinstances, getnilinstances, getscripts, getrunningscripts, getloadedmodules | ✅ |
| **Crypt** | crypt.base64encode, crypt.base64decode, crypt.encrypt, crypt.decrypt, crypt.hash, crypt.generatekey | ✅ |
| **Drawing** | Drawing.new, cleardrawcache, isrenderobj, getrenderproperty, setrenderproperty | ✅ |
| **Debug** | debug.getconstants, debug.getconstant, debug.setconstant, debug.getupvalues, debug.getupvalue, debug.setupvalue, debug.getprotos, debug.getproto, debug.getinfo, debug.getstack | ✅ |
| **Input** | mouse1click, mouse1press, mouse1release, mouse2click, mouse2press, mouse2release, mousescroll, mousemoverel, mousemoveabs | ✅ |
| **HTTP** | request, http.request, http_request | ✅ |
| **WebSocket** | WebSocket.connect | ✅ |
| **Misc** | setclipboard, setfpscap, identifyexecutor, getexecutorname, isrbxactive, getthreadidentity, setthreadidentity | ✅ |

---

## 🚀 DEVELOPMENT ROADMAP

### Phase 1: Foundation (Week 1-2)
- [x] Project structure setup
- [ ] Core PE parser
- [ ] Basic syscall wrapper
- [ ] Memory management

### Phase 2: Injection (Week 3-4)
- [ ] Manual mapping implementation
- [ ] Direct syscall injection
- [ ] Anti-debug integration

### Phase 3: Luau Engine (Week 5-8)
- [ ] Lexer implementation
- [ ] Parser implementation
- [ ] Bytecode compiler
- [ ] VM implementation

### Phase 4: Environment (Week 9-10)
- [ ] Environment spoofing
- [ ] Identity system
- [ ] Closure management

### Phase 5: Features (Week 11-14)
- [ ] All UNC functions
- [ ] Remote spy
- [ ] Decompiler
- [ ] Drawing library

### Phase 6: UI (Week 15-16)
- [ ] ImGui integration
- [ ] Script editor
- [ ] Script hub

### Phase 7: Polish (Week 17-18)
- [ ] Performance optimization
- [ ] Bug fixes
- [ ] Documentation

---

## 📝 NOTES

- **Compiler:** MSVC 2022 (v143)
- **Windows SDK:** 10.0.22621.0
- **Target:** Windows 10/11 x64
- **Dependencies:** Minimal, header-only where possible
- **Code Style:** Modern C++23, RAII, no raw pointers

---

## ⚠️ CODING STANDARDS - MUTLAK KURALLAR

### 🚫 YASAKLAR

#### 1. YORUM YASAĞI
```cpp
// ❌ YASAK - Tek satır yorum
/* ❌ YASAK - Çok satır yorum */
/** ❌ YASAK - Doxygen yorum */

// ✅ Kod kendini açıklamalı
// ✅ İyi isimlendirme = Yorum ihtiyacı yok
// ✅ Fonksiyon/değişken isimleri açıklayıcı olmalı
```

#### 2. KOD KENDİNİ AÇIKLAMALI
```cpp
// ❌ KÖTÜ
int x = 5; // max retry count

// ✅ İYİ
constexpr int MAX_RETRY_COUNT = 5;

// ❌ KÖTÜ
void proc(void* p) { /* process data */ }

// ✅ İYİ
void processIncomingPacket(PacketData* packet) { }

// ❌ KÖTÜ
if (x & 0x80) // check high bit

// ✅ İYİ
constexpr uint8_t HIGH_BIT_MASK = 0x80;
bool hasHighBitSet = (flags & HIGH_BIT_MASK) != 0;
if (hasHighBitSet) { }
```

### ✅ KOD KALİTE STANDARTLARI

#### 1. İSİMLENDİRME KURALLARI
```cpp
namespace AstraPascalCase { }

class ClassName { };

struct StructName { };

enum class EnumName {
    ValueOne,
    ValueTwo
};

void functionName();

int localVariable;
int m_memberVariable;
static int s_staticVariable;
constexpr int CONSTANT_VALUE = 0;

template<typename TValue>
class Container { };
```

#### 2. MODÜLER MİMARİ
```cpp
// Her sınıf tek bir sorumluluk
class ProcessHandle {
    // SADECE process handle yönetimi
};

class MemoryAllocator {
    // SADECE memory allocation
};

class SectionMapper {
    // SADECE section mapping
};

// Bağımlılık enjeksiyonu
class ManualMapper {
public:
    ManualMapper(
        IProcessHandle& process,
        IMemoryAllocator& allocator,
        ISectionMapper& mapper
    );
};
```

#### 3. HEADER YAPISI
```cpp
#pragma once

#include <cstdint>
#include <memory>
#include <span>

namespace Astra::Injector {

class IInjectionTechnique {
public:
    virtual ~IInjectionTechnique() = default;
    
    virtual InjectionResult inject(
        ProcessHandle target,
        std::span<const std::byte> payload
    ) = 0;
    
    virtual std::string_view techniqueName() const = 0;
    
    virtual TechniqueCapabilities capabilities() const = 0;
};

}
```

#### 4. IMPLEMENTATION YAPISI
```cpp
#include "IInjectionTechnique.hpp"
#include "ManualMapper.hpp"

namespace Astra::Injector {

InjectionResult ManualMapper::inject(
    ProcessHandle target,
    std::span<const std::byte> payload
) {
    auto peImage = PEImage::parse(payload);
    if (!peImage) {
        return InjectionResult::InvalidPE;
    }
    
    auto remoteBase = allocateRemoteMemory(target, peImage->imageSize());
    if (!remoteBase) {
        return InjectionResult::AllocationFailed;
    }
    
    if (!mapSections(target, *peImage, *remoteBase)) {
        return InjectionResult::MappingFailed;
    }
    
    if (!processRelocations(*peImage, *remoteBase)) {
        return InjectionResult::RelocationFailed;
    }
    
    if (!resolveImports(target, *peImage)) {
        return InjectionResult::ImportResolutionFailed;
    }
    
    if (!executeTLSCallbacks(target, *peImage, *remoteBase)) {
        return InjectionResult::TLSCallbackFailed;
    }
    
    if (!callEntryPoint(target, *peImage, *remoteBase)) {
        return InjectionResult::EntryPointFailed;
    }
    
    return InjectionResult::Success;
}

}
```

#### 5. ERROR HANDLING
```cpp
// Result tipi kullan, exception değil
template<typename T>
class Result {
public:
    static Result success(T value);
    static Result failure(ErrorCode code);
    
    bool isSuccess() const;
    bool isFailure() const;
    
    T& value();
    ErrorCode error() const;
    
    template<typename Fn>
    auto andThen(Fn&& fn) -> Result<decltype(fn(std::declval<T>()))>;
    
    template<typename Fn>
    auto orElse(Fn&& fn) -> Result<T>;
};

// Kullanım
Result<ProcessHandle> openProcess(uint32_t pid) {
    HANDLE handle = OpenProcess(PROCESS_ALL_ACCESS, FALSE, pid);
    
    if (handle == nullptr) {
        return Result<ProcessHandle>::failure(ErrorCode::ProcessOpenFailed);
    }
    
    return Result<ProcessHandle>::success(ProcessHandle{handle});
}
```

#### 6. RAII VE SMART POINTERS
```cpp
// Raw pointer YASAK
// ❌ void* buffer = malloc(size);
// ✅ auto buffer = std::make_unique<std::byte[]>(size);

// Handle wrapper
class HandleGuard {
public:
    explicit HandleGuard(HANDLE handle);
    ~HandleGuard();
    
    HandleGuard(const HandleGuard&) = delete;
    HandleGuard& operator=(const HandleGuard&) = delete;
    
    HandleGuard(HandleGuard&& other) noexcept;
    HandleGuard& operator=(HandleGuard&& other) noexcept;
    
    HANDLE get() const;
    HANDLE release();
    
private:
    HANDLE m_handle;
};
```

#### 7. CONST CORRECTNESS
```cpp
class PEImage {
public:
    std::span<const std::byte> dosHeader() const;
    std::span<const std::byte> ntHeaders() const;
    std::span<const SectionHeader> sections() const;
    
    uint64_t imageBase() const;
    uint32_t imageSize() const;
    uint32_t entryPoint() const;
    
    bool hasSection(std::string_view name) const;
    std::optional<SectionHeader> findSection(std::string_view name) const;
};
```

#### 8. NAMESPACE KULLANIMI
```cpp
// Her modül kendi namespace'inde
namespace Astra::Injector::Techniques { }
namespace Astra::Injector::Syscall { }
namespace Astra::Injector::PE { }

namespace Astra::Core::Luau { }
namespace Astra::Core::Environment { }
namespace Astra::Core::Hooking { }

// using namespace YASAK (header'larda)
// ❌ using namespace std;
// ✅ std::vector, std::string
```

#### 9. MODERN C++ ÖZELLİKLERİ
```cpp
// std::span kullan (raw pointer + size yerine)
void writeMemory(std::span<const std::byte> data);

// std::optional kullan (nullptr yerine)
std::optional<PEImage> parsePE(std::span<const std::byte> data);

// std::string_view kullan (const char* yerine)
bool hasSection(std::string_view name) const;

// constexpr kullan
constexpr uint32_t PAGE_SIZE = 4096;
constexpr uint32_t SECTION_ALIGNMENT = 0x1000;

// auto kullan (tip açıksa)
auto result = parseHeaders();
auto& section = sections[index];

// Range-based for kullan
for (const auto& section : image.sections()) {
    mapSection(section);
}

// Structured bindings kullan
auto [success, handle] = openProcess(pid);
```

#### 10. DOSYA YAPISI
```
her_header.hpp:
    - #pragma once
    - includes (sorted: std -> external -> internal)
    - forward declarations
    - namespace
    - class/struct definition
    - inline implementations (if needed)

her_source.cpp:
    - include own header FIRST
    - other includes
    - anonymous namespace for file-local
    - implementations
```

### 🎯 KALİTE METRİKLERİ

| Metrik | Hedef |
|--------|-------|
| Fonksiyon uzunluğu | Max 50 satır |
| Sınıf uzunluğu | Max 500 satır |
| Dosya uzunluğu | Max 1000 satır |
| Parametre sayısı | Max 5 |
| Cyclomatic complexity | Max 10 |
| Nesting depth | Max 4 |
| İsimlendirme | Self-documenting |

### 🏗️ PRENSİPLER

1. **SOLID**
   - Single Responsibility
   - Open/Closed
   - Liskov Substitution
   - Interface Segregation
   - Dependency Inversion

2. **DRY** - Don't Repeat Yourself

3. **KISS** - Keep It Simple, Stupid

4. **YAGNI** - You Aren't Gonna Need It

5. **Fail Fast** - Hataları erken yakala

6. **Zero Overhead** - Kullanılmayan için ödeme yapma

### 🚫 CRINGE YASAKLARI

```cpp
// ❌ YASAK - Gereksiz emoji/ASCII art
/*
 *  ██████╗ ██████╗  ██████╗ 
 * ██╔════╝██╔═══██╗██╔═══██╗
 */

// ❌ YASAK - Anlamsız isimler
int x, y, z, temp, data, info, manager, handler;

// ❌ YASAK - Magic numbers
if (value == 0x7B) { }

// ❌ YASAK - Uzun tek satır
auto result = someFunction(param1, param2, param3, param4, param5, param6, param7);

// ❌ YASAK - Gereksiz kısaltmalar
int cnt, ptr, buf, sz, len, idx;

// ❌ YASAK - Hungarian notation
int iCount;
char* pszName;
bool bEnabled;

// ❌ YASAK - Unnecessary complexity
template<typename T, typename U, typename V, typename... Args>
auto complicatedFunction(Args&&... args) -> decltype(auto);

// ✅ Basit, temiz, anlaşılır kod
int connectionCount;
char* userName;
bool isEnabled;
```

### 📋 CODE REVIEW CHECKLIST

- [ ] Yorum yok (kod kendini açıklıyor)
- [ ] İsimler açıklayıcı
- [ ] Fonksiyonlar kısa ve tek amaçlı
- [ ] Raw pointer yok (smart pointer kullanılmış)
- [ ] Exception safety sağlanmış
- [ ] Const correctness uygulanmış
- [ ] RAII kullanılmış
- [ ] Magic number yok
- [ ] Duplicate kod yok
- [ ] Test edilebilir yapı

---

*Last Updated: 2025*
*Astra Executor © 2025*
