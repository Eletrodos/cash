import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Tooltip,
  Checkbox,
  FormControlLabel,
  FormLabel,
  FormGroup
} from "@material-ui/core";

import { IGroupData, IGroupDataRules } from "../../services/types";
import { emptyGroup } from "../../services/constants";

interface IGroupCreatorProps {
  open: boolean;
  onClose: () => void;
  onCreate: (data: IGroupData) => void;
}

interface IFormErrors {
  name: boolean;
  volume: boolean;
}

/* Componente para criar novos grupos */
const GroupCreator: React.FC<IGroupCreatorProps> = ({
  open,
  onClose,
  onCreate
}) => {
  const [data, setData] = useState<IGroupData>(emptyGroup);
  const [error, setError] = useState<IFormErrors>({
    name: false,
    volume: false
  });

  /** Algum dado do grupo foi alterado */
  const handleDataChange = (name: keyof IGroupData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Seta o novo valor
    const currentData: IGroupData = {
      ...data,
      [name]: event.target.value.trim()
    };
    setData(currentData);

    // Checagem de erros
    const currentError: IFormErrors = {
      name: currentData.name === "",
      volume: currentData.volume < 100 || currentData.volume > 10000
    };

    setError(currentError);
  };

  /** Alguma regra do grupo foi alterada */
  const handleRulesChange = (name: keyof IGroupDataRules) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const rules: IGroupDataRules = {
      ...data.rules,
      [name]: !!event.target.value
    };

    setData({ ...data, rules });
  };

  /** Comportamento para chamar o callback de criação de grupo */
  const handleCreateGroupCallback = () => {
    const currentError: IFormErrors = {
      name: data.name === "",
      volume: data.volume < 100 || data.volume > 10000
    };

    setError(currentError);

    if (!currentError.name && !currentError.volume) onCreate(data);
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Criar novo grupo</DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            label={error.name ? "Insira um nome válido" : "Nome"}
            type="text"
            inputProps={{ maxLength: 30 }}
            onChange={handleDataChange("name")}
            fullWidth
            error={error.name}
          />

          <Tooltip title="Quantidade máxima de moedas que podem circular entre as contas. Insira um valor entre 100 e 10.000">
            <TextField
              required
              margin="dense"
              label={
                error.volume
                  ? "O valor deve estar entre 100 e 10000"
                  : "Volume de moedas"
              }
              type="number"
              inputProps={{ min: 0, max: 10000, step: 100, maxLength: 5 }}
              onChange={handleDataChange("volume")}
              value={data.volume}
              fullWidth
              error={error.volume}
            />
          </Tooltip>

          <FormGroup>
            <FormLabel style={{ margin: "10px 0px" }} component="legend">
              Regras
            </FormLabel>
            <Tooltip title="Quando habilitado permite que os usuários façam transferencias entre si.">
              <FormControlLabel
                control={
                  <Checkbox
                    value={data.rules.userTransfer}
                    onChange={handleRulesChange("userTransfer")}
                  />
                }
                label="Transferência entre usuários"
              />
            </Tooltip>
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={handleCreateGroupCallback}>Criar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GroupCreator;
