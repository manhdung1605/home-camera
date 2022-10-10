
const service = {
    fetchItems: payload => {
      let result = Array.from(tasks);
      result = result.sort(getSorter(payload.sort));
      return Promise.resolve(result);
    },
    create: task => {
      count += 1;
      tasks.push({
        ...task,
        id: count
      });
      return Promise.resolve(task);
    },
    update: data => {
      const task = tasks.find(t => t.id === data.id);
      task.title = data.title;
      task.description = data.description;
      return Promise.resolve(task);
    },
    delete: data => {
      const task = tasks.find(t => t.id === data.id);
      tasks = tasks.filter(t => t.id !== task.id);
      return Promise.resolve(task);
    }
  };