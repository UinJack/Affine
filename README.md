# Affine_Transformation

Use 2nd order polynomial correct points.

![img](css/view.gif)

## [Demo](https://bkgiser.github.io/Affine_Transformation/)


## Usage

### Method MatrixCalc(Arr)

```javascript

var mat = new MatrixCalc(Arr);

```
#### Arr

> properties must be more than 7


```json

[
  {
    "from": [
      116.36778831481935,
      39.90570360225632
    ],
    "to": [
      36.05163574218751,
      -18.8744530272481
    ]
  },
  {
    "from": [
      116.41254901885986,
      39.891678069690336
    ],
    "to": [
      40.57250976562501,
      -22.96471572213615
    ]
  },...
]

```

### Method to_target(x,y)


### Method to_target(x,y)


```javascript
    
     return {x: targetX, y: targetY};

```