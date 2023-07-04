function throttle(func: (...args: any[]) => void, wait: number = 100, caller?: any): (...args: any[]) => void {
    let previous = 0;
  
    return  (...args: any[]) => {
      const now = Date.now();
      if (now - previous > wait) {
        previous = now;
        func.apply(caller, args);
      }
    };
}