import React, { Component } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  MenuItem,
  IconButton,
  Paper,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import PinOutlinedIcon from '@mui/icons-material/PinOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';

const tools = [
  { label: "Header Text", type: "header", icon: <TitleOutlinedIcon/> },
  { label: "Text Input", type: "text", icon: <NotesOutlinedIcon/> },
  { label: "Number Input", type: "number", icon: <PinOutlinedIcon/> },
  { label: "Multi-Line Input", type: "textarea", icon: <ListOutlinedIcon/> },
  { label: "Multiple Choice", type: "multipleChoice", icon: <RemoveCircleOutlineOutlinedIcon/>},
  { label: "Checkboxes", type: "checkboxes", icon: <CheckBoxOutlinedIcon/>},
];

export default class CreateForm extends Component {
  state = {
    formName: "",
    category: "",
    formElements: [],
    categories: ["Feedback", "Survey", "Research", "Other"],
  };

  handleAddTool = (toolType) => {
    const newElement = {
      id: `element-${Date.now()}`,
      type: toolType,
      label: "",
      options: toolType === "multipleChoice" || toolType === "checkboxes" ? [""] : null,
    };

    this.setState((prevState) => ({
      formElements: [...prevState.formElements, newElement],
    }));
  };

  handleChangeElement = (index, key, value) => {
    const updatedElements = [...this.state.formElements];
    updatedElements[index][key] = value;
    this.setState({ formElements: updatedElements });
  };

  handleAddOption = (index) => {
    const updatedElements = [...this.state.formElements];
    updatedElements[index].options.push("");
    this.setState({ formElements: updatedElements });
  };

  handleChangeOption = (elementIndex, optionIndex, value) => {
    const updatedElements = [...this.state.formElements];
    updatedElements[elementIndex].options[optionIndex] = value;
    this.setState({ formElements: updatedElements });
  };

  handleRemoveOption = (elementIndex, optionIndex) => {
    const updatedElements = [...this.state.formElements];
    updatedElements[elementIndex].options.splice(optionIndex, 1);
    this.setState({ formElements: updatedElements });
  };

  handleDeleteElement = (index) => {
    const updatedElements = [...this.state.formElements];
    updatedElements.splice(index, 1);
    this.setState({ formElements: updatedElements });
  };

  handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(this.state.formElements);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    this.setState({ formElements: items });
  };

  renderFormElement = (element, index) => {
    switch (element.type) {
      case "header":
        return (
          <Box display="flex" alignItems="center" key={element.id} mb={2}>
            <TextField
              fullWidth
              placeholder="Header Text"
              value={element.label}
              onChange={(e) => this.handleChangeElement(index, "label", e.target.value)}
            />
            <IconButton onClick={() => this.handleDeleteElement(index)}>
              <DeleteOutlineIcon />
            </IconButton>
            <ControlCameraOutlinedIcon/>
          </Box>
        );

      case "text":
      case "number":
      case "textarea":
        return (
          <Box display="flex" alignItems="center" key={element.id} mb={2}>
            <TextField
              fullWidth
              disabled
              placeholder={`Enter ${element.type} input label`}
              value={element.label}
              onChange={(e) => this.handleChangeElement(index, "label", e.target.value)}
            />
            <IconButton onClick={() => this.handleDeleteElement(index)}>
              <DeleteOutlineIcon />
            </IconButton>
            <ControlCameraOutlinedIcon/>
          </Box>
        );

      case "multipleChoice":
      case "checkboxes":
        return (
          <Box key={element.id} mb={2}>
            <Box display="flex" alignItems="center" mb={2}>
              <TextField
                fullWidth
                placeholder="Question"
                value={element.label}
                onChange={(e) => this.handleChangeElement(index, "label", e.target.value)}
              />
              <IconButton onClick={() => this.handleDeleteElement(index)}>
                <DeleteOutlineIcon />
              </IconButton>
              <ControlCameraOutlinedIcon/>
            </Box>
            {element.options.map((option, optionIndex) => (
              <Box key={optionIndex} display="flex" alignItems="center" mb={1}>
                <TextField
                  sx={{width: '70%'}}
                  placeholder="Option"
                  value={option}
                  onChange={(e) =>
                    this.handleChangeOption(index, optionIndex, e.target.value)
                  }
                />
                <IconButton
                  onClick={() => this.handleRemoveOption(index, optionIndex)}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              variant="outlined"
              onClick={() => this.handleAddOption(index)}
              startIcon={<AddCircleOutlineOutlinedIcon />}
            >
              Add Option
            </Button>
          </Box>
        );

      default:
        return null;
    }
  };

  render() {
    const { formName, category, formElements, categories } = this.state;

    return (
      <Box p={3}>
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4">Add New Form</Typography>
          <Box display="flex" gap={2}>
            <Button variant="outlined">Cancel</Button>
            <Button variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Box>

        {/* Form Details */}
        <Box display="flex" gap={2} mb={3}>
          <TextField
            fullWidth
            label="Survey Form Name"
            placeholder="Enter form name"
            value={formName}
            onChange={(e) => this.setState({ formName: e.target.value })}
          />
          <TextField
            fullWidth
            select
            label="Survey Form Category"
            value={category}
            onChange={(e) => this.setState({ category: e.target.value })}
          >
            {categories.map((cat, idx) => (
              <MenuItem key={idx} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Form Builder Section */}
        <Box display="flex" gap={2}>
          

          {/* Form Elements */}
          <DragDropContext onDragEnd={this.handleDragEnd}>
            <Droppable droppableId="formElements">
              {(provided) => (
                <Paper
                  elevation={2}
                  sx={{ flex: 1, padding: 2, minHeight: "300px" }}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <Typography variant="h6" mb={2}>
                    Form Preview
                  </Typography>
                  {formElements.length === 0 ? (
                    <Typography>
                      No elements added yet. Use the toolbox to add elements.
                    </Typography>
                  ) : (
                    formElements.map((element, index) => (
                      <Draggable
                        key={element.id}
                        draggableId={element.id}
                        index={index}
                      >
                        {(provided) => (
                          <Box
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            mb={2}
                          >
                            {this.renderFormElement(element, index)}
                          </Box>
                        )}
                      </Draggable>
                    ))
                  )}
                  {provided.placeholder}
                </Paper>
              )}
            </Droppable>
          </DragDropContext>
          {/* Toolbox */}
          <Paper elevation={2} sx={{ width: "20%", padding: 2 }}>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Typography variant="h6" mb={2}>
                Toolbox
                </Typography>
                <HandymanOutlinedIcon/>
            </Box>
            
            {tools.map((tool, index) => (
              <Button
                key={index}
                variant="outlined"
                fullWidth
                startIcon={tool.icon}
                onClick={() => this.handleAddTool(tool.type)}
                sx={{ mb: 1 }}
              >
                {tool.label}
              </Button>
            ))}
          </Paper>
        </Box>
      </Box>
    );
  }
}
