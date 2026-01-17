import { FaPython, FaReact, FaAws, FaDatabase, FaEthereum, FaCuttlefish } from 'react-icons/fa';
import { DiJavascript1, DiJava, DiRuby, DiGit, DiJenkins, DiTerminal, DiNodejsSmall, DiDart } from 'react-icons/di';
import { GrSwift, GrGatsbyjs } from 'react-icons/gr';
import { SiPytorch, SiGooglecloud, SiJupyter } from 'react-icons/si';

export const iconMap = {
  FaPython,
  FaReact,
  FaAws,
  FaDatabase,
  FaEthereum,
  FaCuttlefish,
  DiJavascript1,
  DiJava,
  DiRuby,
  DiGit,
  DiJenkins,
  DiTerminal,
  DiNodejsSmall,
  DiDart,
  GrSwift,
  GrGatsbyjs,
  SiPytorch,
  SiGooglecloud,
  SiJupyter
};

export async function getIconComponent(name: string) {
  return iconMap[name] || (() => <span>?</span>);
}