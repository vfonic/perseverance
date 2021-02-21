import * as S from './styles'

export const FilterAndSortHeader = () => (
  <S.Nav>
    <S.H1>Jackets</S.H1>
    <S.Sort>
      <S.CollectionSort>
        <S.Label>Filter by:</S.Label>
        <select>
          <option value="/"> All
            Jackets
          </option>
        </select>
      </S.CollectionSort>

      <S.CollectionSort>
        <S.Label>Sort by:</S.Label>
        <select>
          <option value="/"> Featured</option>
        </select>
      </S.CollectionSort>
    </S.Sort>
  </S.Nav>
)

