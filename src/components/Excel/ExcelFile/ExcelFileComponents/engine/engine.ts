import * as Matrix from '../matrix';
import { Point } from '../point';
import { CellBase, CreateFormulaParser } from '../types';
import * as Formula from './formula';
import { PointGraph } from './point-graph';
import { PointSet } from './point-set';

export class Model<Cell extends CellBase> {
  readonly data!: Matrix.Matrix<Cell>;
  readonly evaluatedData!: Matrix.Matrix<Cell>;
  readonly referenceGraph!: PointGraph;
  readonly createFormulaParser!: CreateFormulaParser;

  constructor(
    createFormulaParser: CreateFormulaParser,
    data: Matrix.Matrix<Cell>,
    referenceGraph?: PointGraph,
    evaluatedData?: Matrix.Matrix<Cell>
  ) {
    this.createFormulaParser = createFormulaParser;
    this.data = data;
    this.referenceGraph = referenceGraph || createReferenceGraph();
    this.evaluatedData =
      evaluatedData || createEvaluatedData(data, this.referenceGraph);
  }
}

export function updateCellValue<Cell extends CellBase>(
  model: Model<Cell>,
  point: Point,
  cell: Cell
): Model<Cell> {
  const nextData = Matrix.set(point, cell, model.data);
  const nextReferenceGraph = Formula.isFormulaValue(cell.value)
    ? updateReferenceGraph(model.referenceGraph)
    : model.referenceGraph;

  const nextEvaluatedData = evaluateCell(
    model.evaluatedData,
    nextData,
    nextReferenceGraph,
    point,
    cell
  );
  return new Model(
    model.createFormulaParser,
    nextData,
    nextReferenceGraph,
    nextEvaluatedData
  );
}

function updateReferenceGraph(referenceGraph: PointGraph): PointGraph {
  return referenceGraph;
}

function evaluateCell<Cell extends CellBase>(
  prevEvaluatedData: Matrix.Matrix<Cell>,
  data: Matrix.Matrix<Cell>,
  referenceGraph: PointGraph,
  point: Point,
  cell: Cell
): Matrix.Matrix<Cell> {
  if (referenceGraph.hasCircularDependency(point)) {
    let visited = PointSet.from([point]);
    let nextEvaluatedData = Matrix.set(
      point,
      { ...cell, value: 'TODO' }, // TODO For Formula Evaluation
      prevEvaluatedData
    );
    for (const referrer of referenceGraph.getBackwardsRecursive(point)) {
      if (visited.has(referrer)) {
        break;
      }
      visited = visited.add(referrer);
      const referrerCell = Matrix.get(referrer, data);
      if (!referrerCell) {
        continue;
      }
      nextEvaluatedData = Matrix.set(
        referrer,
        { ...referrerCell, value: 'TODO' }, // TODO For Formula Evaluation
        nextEvaluatedData
      );
    }
    return nextEvaluatedData;
  }

  let nextEvaluatedData = prevEvaluatedData;

  const evaluatedValue = Formula.isFormulaValue(cell.value)
    ? getFormulaComputedValue()
    : cell.value;

  const evaluatedCell = { ...cell, value: evaluatedValue };

  nextEvaluatedData = Matrix.set(point, evaluatedCell, nextEvaluatedData);

  // for every formula cell that references the cell re-evaluate (recursive)
  for (const referrer of referenceGraph.getBackwardsRecursive(point)) {
    const referrerCell = Matrix.get(referrer, data);
    if (!referrerCell) {
      continue;
    }
    const evaluatedValue = Formula.isFormulaValue(referrerCell.value)
      ? getFormulaComputedValue()
      : referrerCell.value;
    const evaluatedCell = { ...referrerCell, value: evaluatedValue };
    nextEvaluatedData = Matrix.set(referrer, evaluatedCell, nextEvaluatedData);
  }

  return nextEvaluatedData;
}

export function createReferenceGraph(): PointGraph {
  const entries: Array<[Point, PointSet]> = [];

  return PointGraph.from(entries);
}

export function createEvaluatedData<Cell extends CellBase>(
  data: Matrix.Matrix<Cell>,
  referenceGraph: PointGraph
): Matrix.Matrix<Cell> {
  let evaluatedData = data;

  // Iterate over the points in the reference graph, starting from the leaves
  for (const point of referenceGraph.traverseBFSBackwards()) {
    // Get the cell at the current point in the data Matrix
    const cell = Matrix.get(point, data);
    if (!cell) {
      continue;
    }

    // If the cell is a formula cell, evaluate it
    if (Formula.isFormulaValue(cell.value)) {
      const evaluatedValue = getFormulaComputedValue();
      evaluatedData = Matrix.set(
        point,
        { ...cell, value: evaluatedValue },
        evaluatedData
      );
    }
  }

  return evaluatedData;
}

/** Get the computed value of a formula cell */
//TODO Function need to be Evaluate
export function getFormulaComputedValue() {
  return 'TODO'; // TODO For Formula Evaluation
}
