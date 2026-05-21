// Day 49: Node.js OS Module

const os = require("os");

console.log("1. SYSTEM INFORMATION");
console.log("OS Platform:", os.platform());
console.log("OS Type:", os.type());
console.log("OS Release:", os.release());
console.log("OS Version:", os.version());
console.log("Hostname:", os.hostname());
console.log("System uptime:", os.uptime(), "seconds");
console.log("System uptime (hours):", (os.uptime() / 3600).toFixed(2), "hours");

console.log("\n2. CPU INFORMATION");
const cpus = os.cpus();
console.log("Number of CPU cores:", cpus.length);
console.log("CPU Model:", cpus[0]?.model);
console.log("CPU Speed:", cpus[0]?.speed, "MHz");

if (cpus.length > 0) {
    console.log("\nCPU Details (first core):");
    console.log("  User time:", cpus[0].times.user, "ms");
    console.log("  Nice time:", cpus[0].times.nice, "ms");
    console.log("  System time:", cpus[0].times.sys, "ms");
    console.log("  Idle time:", cpus[0].times.idle, "ms");
    console.log("  IRQ time:", cpus[0].times.irq, "ms");
}

console.log("\n3. MEMORY INFORMATION");
console.log("Total RAM:", (os.totalmem() / (1024 ** 3)).toFixed(2), "GB");
console.log("Free RAM:", (os.freemem() / (1024 ** 3)).toFixed(2), "GB");
console.log("Used RAM:", ((os.totalmem() - os.freemem()) / (1024 ** 3)).toFixed(2), "GB");
console.log("Memory usage percentage:", ((1 - os.freemem() / os.totalmem()) * 100).toFixed(2), "%");

console.log("\n4. NETWORK INTERFACES");
const networkInterfaces = os.networkInterfaces();
console.log("Network interfaces:");
let interfaceCount = 0;
for (const [name, interfaces] of Object.entries(networkInterfaces)) {
    interfaceCount++;
    console.log(`  ${name}:`);
    interfaces.forEach(iface => {
        if (iface.family === "IPv4") {
            console.log(`    IPv4: ${iface.address} (${iface.internal ? "internal" : "external"})`);
        }
    });
}
if (interfaceCount === 0) console.log("  No network interfaces found");

console.log("\n5. USER INFORMATION");
console.log("Home directory:", os.homedir());
console.log("Temp directory:", os.tmpdir());
console.log("Current user:");
console.log("  Username:", os.userInfo().username);
console.log("  UID:", os.userInfo().uid);
console.log("  GID:", os.userInfo().gid);
console.log("  Shell:", os.userInfo().shell);
console.log("  Home:", os.userInfo().homedir);

console.log("\n6. ENDIANNESS AND CONSTANTS");
console.log("Endianness:", os.endianness());
console.log("Load average (1,5,15 min):", os.loadavg());
console.log("OS Constants - Signals (sample):", Object.keys(os.constants.signals).slice(0, 5));
console.log("OS Constants - Errors (sample):", Object.keys(os.constants.errno).slice(0, 5));

console.log("\n7. SYSTEM HEALTH CHECK");
function getSystemHealth() {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const memUsagePercent = (usedMem / totalMem) * 100;
    
    const uptimeHours = os.uptime() / 3600;
    const cpusCount = os.cpus().length;
    const loadAvg = os.loadavg()[0];
    const cpuLoadPercent = (loadAvg / cpusCount) * 100;
    
    return {
        memory: {
            total: (totalMem / 1024 ** 3).toFixed(2) + " GB",
            used: (usedMem / 1024 ** 3).toFixed(2) + " GB",
            free: (freeMem / 1024 ** 3).toFixed(2) + " GB",
            usagePercent: memUsagePercent.toFixed(2) + "%"
        },
        cpu: {
            cores: cpusCount,
            loadAvg1min: loadAvg.toFixed(2),
            loadPercent: cpuLoadPercent.toFixed(2) + "%"
        },
        system: {
            uptime: uptimeHours.toFixed(2) + " hours",
            platform: os.platform(),
            hostname: os.hostname()
        }
    };
}

console.log("\nSYSTEM HEALTH REPORT:");
const health = getSystemHealth();
console.log("Memory:", health.memory);
console.log("CPU:", health.cpu);
console.log("System:", health.system);

console.log("\n8. PRACTICE TASKS");

function monitorResources(interval = 3000, duration = 10000) {
    console.log(`Monitoring resources every ${interval}ms for ${duration}ms...`);
    let elapsed = 0;
    const intervalId = setInterval(() => {
        const memUsage = ((1 - os.freemem() / os.totalmem()) * 100).toFixed(1);
        const loadAvg = os.loadavg()[0].toFixed(2);
        console.log(`[${elapsed}ms] CPU Load: ${loadAvg}, Memory Usage: ${memUsage}%`);
        elapsed += interval;
    }, interval);
    
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Monitoring stopped");
    }, duration);
}
monitorResources(2000, 6000);

function getCPUSpeed() {
    const cpus = os.cpus();
    let totalSpeed = 0;
    cpus.forEach(cpu => totalSpeed += cpu.speed);
    const avgSpeed = totalSpeed / cpus.length;
    console.log(`Average CPU speed: ${avgSpeed.toFixed(0)} MHz`);
    return avgSpeed;
}
getCPUSpeed();

console.log("\nDay 49 completed - OS module covered.");