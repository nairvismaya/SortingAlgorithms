// Sample data
const initialValues = [90,6,56,56,92,33,16,34,41,90,10,24,74,67,27,54,49,19,1,25,98,89,26,24,3,29,78,49,99,64,64,82,74,8,13,73,13,10,12,85,91,45,56,75,50,5,77,15,33,12,38];

// Create the chart
const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: initialValues,
    datasets: [
      {
        label: "Values",
        data: initialValues,
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      responsive: true, 
      y: {
        display: false
      },
        
      x: {
        grid: {
            display: false, 
        },
        ticks: {
          maxRotation: 0, // Set max rotation to 0 degrees (horizontal)
          minRotation: 0, // Set min rotation to 0 degrees (horizontal)
      },
    },
   
    },
  },
});

// Function to shuffle the initial values array
function shuffleInitialValues(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function insertionSort(arr) {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    // Store the current element to be compared
    let currentElement = arr[i];
    let j = i - 1;

    // Compare the current element with the elements to its left
    while (j >= 0 && arr[j] > currentElement) {
      // If the element to the left is greater, shift it to the right
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the current element in its correct position
    arr[j + 1] = currentElement;
  }

  return arr;
}

function selectionSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    // Assume the current index contains the minimum value
    let minIndex = i;

    // Find the index of the minimum value in the remaining unsorted portion
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum value with the value at the current index
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

function bubbleSort(arr) {
  const length = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively merge sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the two sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and add the smaller element to the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements from both arrays
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function shellSort(arr) {
  const length = arr.length;
  let gap = Math.floor(length / 2);

  while (gap > 0) {
    for (let i = gap; i < length; i++) {
      const temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
}

// Function to randomize the chart data
function randomizeChart() {
  const shuffledValues = shuffleInitialValues([...initialValues]);
  myChart.data.datasets[0].data = shuffledValues;
  myChart.data.labels = shuffledValues;
  myChart.update();
}

function randomArray() {
  const values = insertionSort([...initialValues]);
  myChart.data.datasets[0].data = values;
  myChart.data.labels = values;
  myChart.update();
}

function clickSelection() {
  const value = selectionSort([...initialValues]);
  myChart.data.datasets[0].data = value;
  myChart.data.labels = value;
  myChart.update();
}

function clickBubble() {
  const bubble = bubbleSort([...initialValues]);
  myChart.data.datasets[0].data = bubble;
  myChart.data.labels = bubble;
  myChart.update();
}
function clickQuick() {
  const quick = quickSort([...initialValues]);
  myChart.data.datasets[0].data = quick;
  myChart.data.labels = quick;
  myChart.update();
}

function clickMerge() {
  const merge = mergeSort([...initialValues]);
  myChart.data.datasets[0].data = merge;
  myChart.data.labels = merge;
  myChart.update();
}

function clickShell() {
  const shell = shellSort([...initialValues]);
  myChart.data.datasets[0].data = shell;
  myChart.data.labels = shell;
  myChart.update();
}
function shrinkBarSize() {
  const dataset = myChart.data.datasets[0];
            const shrinkFactor = 0.8;
            dataset.barPercentage += shrinkFactor;
            myChart.update(); 
}