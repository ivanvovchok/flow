const useFeaturedCategoryChart = () => {
  const data: number[] = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
  ];

  const config = {
    height: 60,
    autoFit: false,
    data,
    smooth: true,
  };

  return {
    config
  }
}

export default useFeaturedCategoryChart